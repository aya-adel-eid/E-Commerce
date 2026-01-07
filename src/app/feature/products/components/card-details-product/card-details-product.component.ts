import { Component, inject, Input } from '@angular/core';
import { Details } from '../../interfaces/IPRoductDetails';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../cart/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../wishlist/services/wishlist.service';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';
import { AuthService } from '../../../auth/services/auth.service';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-card-details-product',
  imports: [LoadingScreenComponent, CarouselModule, ImagePlaceHolderDirective],
  templateUrl: './card-details-product.component.html',
  styleUrl: './card-details-product.component.css',
})
export class CardDetailsProductComponent {
  @Input({ required: true }) product!: Details;
  @Input() loading!: boolean;
  private readonly cartServices = inject(CartService);
  public readonly wishlistServices = inject(WishlistService);
  private readonly toaster = inject(ToastrService);
  public readonly authServices = inject(AuthService);
  isLike = false;
  isLoading: boolean = false;
  quantityOfItem = 0;

  totalQuantity = 0;
  ngOnChanges() {
    if (this.product) {
      this.totalQuantity = this.product.quantity;
    }
  }
  incrementITem() {
    if (this.quantityOfItem < this.totalQuantity) {
      this.quantityOfItem += 1;
      this.totalQuantity -= 1;
    }
  }
  decrementtITem() {
    if (this.quantityOfItem > 0) {
      this.quantityOfItem -= 1;
      this.totalQuantity += 1;
    }
  }
  //

  removeProductInWishlist(id: string) {
    this.wishlistServices.deleteProductInWishlist(id);
  }
  addToCart(productID: string) {
    if (!this.authServices.isAuth()) {
      (window as any).openAuthModal();
      return;
    }
    this.isLoading = true;
    this.cartServices.sendProductInCart({ productId: productID }).subscribe({
      next: (resp) => {
        this.isLoading = false;
        this.isLike = true;
        this.cartServices.numOfCartItems = resp.numOfCartItems;
        this.toaster.success('<h5 class="text-xl">Product added Successfully!</h5>', undefined, {
          enableHtml: true,
          progressBar: true,
        });
      },
      error: (err: HttpErrorResponse) => {
        this.isLike = false;
        this.toaster.error('Failed To Add Product!');
        this.isLoading = false;
      },
    });
  }
  // wisghlist
  addToWishlist(productID: string) {
    if (!this.authServices.isAuth()) {
      (window as any).openAuthModal();
      return;
    }
    this.isLike = false;
    this.wishlistServices.addProductToWishlist({ productId: productID });
  }
}
