import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../../interfaces/IAllProducts';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Products;
  isLike = false;
  isShow = false;
}
