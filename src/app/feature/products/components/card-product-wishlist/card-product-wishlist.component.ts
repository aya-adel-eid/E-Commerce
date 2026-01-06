import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../wishlist/services/wishlist.service';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../../wishlist/interfaces/IFavProdReq';
import { RouterLink } from '@angular/router';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-card-product-wishlist',
  imports: [RouterLink, ImagePlaceHolderDirective],
  templateUrl: './card-product-wishlist.component.html',
  styleUrl: './card-product-wishlist.component.css',
})
export class CardProductWishlistComponent {
  @Input({ required: true }) product!: Product;
  private readonly cartServices = inject(CartService);
  public readonly wishlistServices = inject(WishlistService);
  public readonly authServices = inject(AuthService);
  //spinner
  // private readonly ngxSpinnerService = inject(NgxSpinnerService);
  ngOnInit() {
    // this.wishlistServices.wishlistID();
    this.wishlistServices.getAllProductsInWishlist();
  }
  isLike = false;
  isShow = false;
  hoveronBtn = false;
  isLoading = false;
  private readonly toaster = inject(ToastrService);
  addProductToCart(_productId: string) {
    // this.ngxSpinnerService.show('ball-scale');
    this.isLoading = true;
    this.cartServices.sendProductInCart({ productId: _productId }).subscribe({
      next: (resp) => {
        this.cartServices.numOfCartItems = resp.numOfCartItems;
        this.toaster.success('<h5 class="text-xl">Product added Successfully!</h5>', undefined, {
          enableHtml: true,
          progressBar: true,
        });
        this.isLoading = false;
        // this.ngxSpinnerService.hide('ball-scale');
      },
      error: (err: HttpErrorResponse) => {
        this.toaster.error('Failed to add product!');
        this.isLoading = false;
        // this.ngxSpinnerService.hide('ball-scale');
      },
    });
  }
  addToWishlist(productID: string) {
    this.isLike = false;
    this.wishlistServices.addProductToWishlist({ productId: productID });
  }
  removeProductInWishlist(id: string) {
    this.wishlistServices.deleteProductInWishlist(id);
  }
}
