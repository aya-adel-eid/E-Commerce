import { Component, Input } from '@angular/core';
import { CartItem } from '../../interfaces/IOrdersResp';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';

@Component({
  selector: 'app-orders-card',
  imports: [ImagePlaceHolderDirective],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.css',
})
export class OrdersCardComponent {
  @Input({ required: true }) cartItem!: CartItem;
}
