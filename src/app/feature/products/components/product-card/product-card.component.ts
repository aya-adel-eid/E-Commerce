import { Component, inject, Input, OnInit } from '@angular/core';

import { Products } from '../../interfaces/IAllProducts';
import { CartService } from '../../../cart/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../wishlist/services/wishlist.service';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';
import { CheckpricePipe } from '../../../../shared/pipes/checkprice-pipe';
import { AuthService } from '../../../auth/services/auth.service';

// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, ImagePlaceHolderDirective, CheckpricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Products;
  private readonly cartServices = inject(CartService);
  public readonly wishlistServices = inject(WishlistService);
  public readonly authServices = inject(AuthService);

  // ngOnInit() {
  //   if (this.authServices.isAuth()) {
  //     // this.wishlistServices.wishlistID();
  //     this.wishlistServices.getAllProductsInWishlist();
  //   } else {
  //     this.wishlistServices.reset();
  //   }
  // }
  //spinner
  // private readonly ngxSpinnerService = inject(NgxSpinnerService);
  isLike = false;
  isShow = false;
  hoveronBtn = false;
  isLoading = false;
  private readonly toaster = inject(ToastrService);
  addProductToCart(_productId: string) {
    // this.ngxSpinnerService.show('ball-scale');
    if (!this.authServices.isAuth()) {
      (window as any).openAuthModal();
      return;
    }
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
    if (!this.authServices.isAuth()) {
      (window as any).openAuthModal();
      return;
    }
    this.isLike = false;
    this.wishlistServices.addProductToWishlist({ productId: productID });
  }
  removeProductInWishlist(id: string) {
    this.wishlistServices.deleteProductInWishlist(id);
  }
  // checkItemFound(id: string) {
  //   if (this.arrWishList.includes(id)) {
  //     this.isLike = false;
  //     this.removeProductInWishlist(id);
  //   } else {
  //     this.addProductToCart(id);
  //     this.isLike = true;
  //   }
  // }
}
