import { Component, inject, Input } from '@angular/core';
import { Details } from '../../interfaces/IPRoductDetails';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../cart/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../wishlist/services/wishlist.service';

@Component({
  selector: 'app-card-details-product',
  imports: [LoadingScreenComponent, CarouselModule],
  templateUrl: './card-details-product.component.html',
  styleUrl: './card-details-product.component.css',
})
export class CardDetailsProductComponent {
  @Input({ required: true }) product!: Details;
  @Input() loading!: boolean;
  private readonly cartServices = inject(CartService);
  private readonly wishlistServices = inject(WishlistService);
  private readonly toaster = inject(ToastrService);
  isLike = false;
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
      console.log('icrement', this.quantityOfItem);
      console.log(this.totalQuantity);
    }
  }
  decrementtITem() {
    if (this.quantityOfItem > 0) {
      this.quantityOfItem -= 1;
      this.totalQuantity += 1;
      console.log('decrement', this.quantityOfItem);
      console.log(this.totalQuantity);
    }
  }
  //
  addToCart(productID: string) {
    this.cartServices.sendProductInCart({ productId: productID }).subscribe({
      next: (resp) => {
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
      },
    });
  }
  // wisghlist
  addToWishlist(productID: string) {
    this.isLike = false;
    this.wishlistServices.addProductToWishlist({ productId: productID }).subscribe({
      next: (resp) => {
        this.isLike = true;
        this.toaster.success(
          '<h5 class="text-xl">Product added To WishList Successfully!</h5>',
          undefined,
          {
            enableHtml: true,
            progressBar: true,
          }
        );
      },
      error: (err: HttpErrorResponse) => {
        this.isLike = false;
        this.toaster.error('Failed To Add Product!');
      },
    });
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   margin: 10,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     200: {
  //       items: 3,
  //     },
  //     300: {
  //       items: 3,
  //     },
  //     400: {
  //       items: 4,
  //     },
  //   },
  //   nav: true,

  //   rtl: false,
  // };
}
