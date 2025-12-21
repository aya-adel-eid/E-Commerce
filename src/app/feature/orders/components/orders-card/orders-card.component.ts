import { Component, Input } from '@angular/core';
import { CartItem } from '../../interfaces/IOrdersResp';

@Component({
  selector: 'app-orders-card',
  imports: [],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.css',
})
export class OrdersCardComponent {
  @Input({ required: true }) cartItem!: CartItem;
}
