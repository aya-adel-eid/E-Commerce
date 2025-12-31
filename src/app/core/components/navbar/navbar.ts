import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../feature/auth/services/auth.service';
import { CartService } from '../../../feature/cart/services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  @Input() islogin: boolean = true;
  @Input() user: boolean = true;
  public readonly cartServices = inject(CartService);
  public readonly authService = inject(AuthService);
  openMenuAuth = true;
  openBar = true;
  ngOnInit(): void {
    this.getProductsCart();
  }
  logOut() {
    this.authService.logOut();
  }
  getProductsCart() {
    this.cartServices.getAllProductsInCart();
  }
}
