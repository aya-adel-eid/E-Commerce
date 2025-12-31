import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscountCartPipe } from '../../../../shared/pipes/discount-cart-pipe';
import { WayDeliveryPipe } from '../../../../shared/pipes/way-delivery-pipe';

@Component({
  selector: 'app-summary-card',
  imports: [RouterLink, DiscountCartPipe, WayDeliveryPipe],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css',
})
export class SummaryCardComponent {
  @Input() totalPrice!: number;
  @Input({ required: true }) cartID!: string;
  @Input() cartItems!: number;
  subTotal!: number;
  // calcTotalPrice(totalPrice: number) {
  //   const discount =
  //     totalPrice > 20000 ? 2000 : totalPrice > 10000 ? 1000 : totalPrice > 5000 ? 500 : 0;
  //   this.subTotal = totalPrice - discount;
  //   return this.checkDelver();
  // }
  // checkDelver() {
  //   if (this.subTotal > 5000) {
  //     return this.subTotal + 200;
  //   } else return this.subTotal;
  // }
}
