import { computed, effect, inject, Injectable, PLATFORM_ID, signal, Signal } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { IFavProdReq, Product } from '../interfaces/IFavProdReq';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService extends BaseHttp {
  private readonly plat_ID = inject(PLATFORM_ID);
  private readonly toast = inject(ToastrService);
  private readonly authServices = inject(AuthService);
  wishlist!: Product[];
  // wishlistID!: string[];
  wishlistID = signal<string[]>([]);
  addProductToWishlist(productId: {}) {
    return this.httpClient.post<any>(APIS_KYS.WISHLIST.data, productId).subscribe({
      next: (resp) => {
        // this.wishlistID.set(resp.data);

        this.getAllProductsInWishlist();

        this.toast.success(
          '<h5 class="text-xl">Product added To WishList Successfully!</h5>',
          undefined,
          {
            enableHtml: true,
            progressBar: true,
          }
        );
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error('Failed To Add Product!');
      },
    });
  }
  getAllProductsInWishlist() {
    if (isPlatformBrowser(this.plat_ID)) {
      return this.httpClient.get<IFavProdReq>(APIS_KYS.WISHLIST.data).subscribe({
        next: (resp) => {
          this.wishlist = resp.data;
          this.wishlistID.set(this.wishlist.map((item) => item._id));
        },
      });
    }
    return null;
  }
  deleteProductInWishlist(id: string) {
    return this.httpClient.delete<any>(`${APIS_KYS.WISHLIST.data}/${id}`).subscribe({
      next: (resp) => {
        // this.wishlistServices.wishlist = resp.data;
        //update list wish
        // this.wishlistID.set(resp.data);
        this.getAllProductsInWishlist();

        this.toast.success('<h5 class="text-xl">Item removed from your wishlist!</h5>', undefined, {
          enableHtml: true,
          progressBar: true,
        });
      },
    });
  }
  isInWishlist = computed(() => (id: string) => this.wishlistID().includes(id));
  reset() {
    //
    this.wishlistID.set([]);
  }
  test = effect(() => {
    if (!this.authServices.isAuth()) {
      this.reset();
    }
  });
}
