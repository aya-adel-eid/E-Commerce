import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { Products } from '../../interfaces/IAllProducts';
import { BrandsService } from '../../../brand/services/brands.service';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';
import { AuthService } from '../../../auth/services/auth.service';
import { WishlistService } from '../../../wishlist/services/wishlist.service';

@Component({
  selector: 'app-products-by-brands',
  imports: [ProductCardComponent, LoadingScreenComponent, BreadCrumbComponent],
  templateUrl: './products-by-brands.component.html',
  styleUrl: './products-by-brands.component.css',
})
export class ProductsByBrandsComponent implements OnInit {
  public readonly productsService = inject(ProductsService);
  public readonly brandsService = inject(BrandsService);
  titleBrand = '';
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly authServices = inject(AuthService);
  private readonly wishlistServices = inject(WishlistService);
  ngOnInit(): void {
    if (this.authServices.isAuth()) {
      // this.wishlistServices.wishlistID();
      this.wishlistServices.getAllProductsInWishlist();
    } else {
      this.wishlistServices.reset();
    }
  }
  brandID!: string;
  filterByBrand!: Products[];
  constructor() {
    this.activeRoute.paramMap.subscribe({
      next: (param) => {
        this.brandID = param.get('id')!;
        this.getProductsByBrand();
      },
    });
    this.brandsService.getSpecificBrand(this.brandID);
  }
  getProductsByBrand() {
    this.productsService.getProductsByBrand(this.brandID);
  }
}
