import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../feature/cart/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-bottom',
  imports: [RouterLink],
  templateUrl: './navbar-bottom.component.html',
  styleUrl: './navbar-bottom.component.css',
})
export class NavbarBottomComponent {
  @Input({ required: true }) islogin!: boolean;
  public readonly cartServices = inject(CartService);
}
