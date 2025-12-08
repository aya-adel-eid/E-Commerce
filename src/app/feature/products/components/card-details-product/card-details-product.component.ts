import { Component, Input } from '@angular/core';
import { Details } from '../../interfaces/IPRoductDetails';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card-details-product',
  imports: [LoadingScreenComponent, CarouselModule],
  templateUrl: './card-details-product.component.html',
  styleUrl: './card-details-product.component.css',
})
export class CardDetailsProductComponent {
  @Input({ required: true }) product!: Details;
  @Input() loading!: boolean;
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
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      200: {
        items: 3,
      },
      300: {
        items: 3,
      },
      400: {
        items: 4,
      },
    },
    nav: true,

    rtl: false,
  };
}
