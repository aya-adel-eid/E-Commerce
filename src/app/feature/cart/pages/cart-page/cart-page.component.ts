import { Component, inject, OnInit } from '@angular/core';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { CartService } from '../../services/cart.service';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [CartCardComponent, SummaryCardComponent, LoadingScreenComponent, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  public readonly cartService = inject(CartService);
  ngOnInit(): void {
    this.getAllCart();
  }
  getAllCart() {
    this.cartService.getAllProductsInCart();
  }
  clearCart() {
    this.cartService.deleteCartProducts();
  }
}
