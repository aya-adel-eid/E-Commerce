import { Component, HostListener, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../feature/auth/services/auth.service';
import { CartService } from '../../../feature/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../contstants/storedKey';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../services/utilites/owlCoursl.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CarouselModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  @Input() islogin: boolean = true;
  @Input() user: boolean = true;
  public readonly cartServices = inject(CartService);
  public readonly authService = inject(AuthService);
  private readonly platID = inject(PLATFORM_ID);
  public readonly navbarServices = inject(NavbarService);
  name!: string;
  openMenuAuth = true;
  openBar = true;
  isBrowser = false;
  links = [
    { path: '/home', label: 'Home', icon: 'fa-house' },
    { path: '/product', label: 'Products', icon: 'fa-bag-shopping' },
    { path: '/categories', label: 'Categories', icon: 'fa-layer-group' },
    { path: '/brand', label: 'Brands', icon: 'fa-tags' },
  ];
  ngOnInit(): void {
    if (isPlatformBrowser(this.platID)) {
      this.isBrowser = true;
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
  customOptions: OwlOptions = getOwlOptions({
    items: 1,
    nav: false,
    autoplay: true,
  });
  @HostListener('window:scroll') onScroll() {
    if (scrollY > 40) {
      this.navbarServices.scroll.set(true);
    } else this.navbarServices.scroll.set(false);
  }
}
