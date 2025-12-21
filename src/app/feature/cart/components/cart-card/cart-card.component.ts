import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/ICartResp';
import { CartService } from '../../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UpdataData } from '../../interfaces/IUptadeCartResp';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-card',
  imports: [CurrencyPipe],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent {
  @Input({ required: true }) cartData!: Product;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) count!: number;
  isLike = false;
  updateCartUser!: UpdataData;
  private readonly cartServices = inject(CartService);
  updateProductCount(_count: number, id: string) {
    this.cartServices.updateCartItem({ count: _count }, id);
  }
  removeCartItem(id: string) {
    this.cartServices.removeCartItem(id);
  }
}
