import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CardProductWishlistComponent } from '../../../products/components/card-product-wishlist/card-product-wishlist.component';

@Component({
  selector: 'app-wishlist-page',
  imports: [ProductCardComponent, LoadingScreenComponent, CardProductWishlistComponent],
  templateUrl: './wishlist-page.component.html',
  styleUrl: './wishlist-page.component.css',
})
export class WishlistPageComponent implements OnInit {
  public readonly wishlistServices = inject(WishlistService);
  ngOnInit(): void {
    this.getAllProductsInWishlist();
  }
  getAllProductsInWishlist() {
    this.wishlistServices.getAllProductsInWishlist();
  }
}
