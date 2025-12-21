import { Component, Input } from '@angular/core';
import { ShippingAddress, User } from '../../interfaces/IOrdersResp';

@Component({
  selector: 'app-order-details',
  imports: [],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
})
export class OrderDetailsComponent {
  @Input({ required: true }) userDetails!: User;
  @Input({ required: true }) shippingAddress!: ShippingAddress;
}
