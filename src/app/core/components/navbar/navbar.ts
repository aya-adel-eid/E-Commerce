import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../feature/auth/services/auth.service';
import { CartService } from '../../../feature/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../contstants/storedKey';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  @Input() islogin: boolean = true;
  @Input() user: boolean = true;
  public readonly cartServices = inject(CartService);
  public readonly authService = inject(AuthService);
  private readonly platID = inject(PLATFORM_ID);
  name!: string;
  openMenuAuth = true;
  openBar = true;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platID)) {
      if (this.authService.isAuth()) {
        this.getProductsCart();
        this.authService.getInfo(localStorage.getItem(STORED_KEYS.UserId)!);
      }
    }
  }
  logOut() {
    this.authService.logOut();
  }
  getProductsCart() {
    this.cartServices.getAllProductsInCart();
  }
}
