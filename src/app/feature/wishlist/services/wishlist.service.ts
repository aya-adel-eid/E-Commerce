import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { isPlatformBrowser } from '@angular/common';

import { IFavProdReq, Product } from '../interfaces/IFavProdReq';

@Injectable({
  providedIn: 'root',
})
export class WishlistService extends BaseHttp {
  private readonly plat_ID = inject(PLATFORM_ID);
  wishlist!: Product[];
  addProductToWishlist(productId: {}) {
    return this.httpClient.post(APIS_KYS.WISHLIST.data, productId);
  }
  getAllProductsInWishlist() {
    if (isPlatformBrowser(this.plat_ID)) {
      return this.httpClient.get<IFavProdReq>(APIS_KYS.WISHLIST.data).subscribe({
        next: (resp) => {
          this.wishlist = resp.data;
        },
      });
    }
    return null;
  }
  deleteProductInWishlist(id: string) {
    return this.httpClient.delete(`${APIS_KYS.WISHLIST.data}/${id}`);
  }
}
