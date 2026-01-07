import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CategoriesService } from '../../../categories/services/categories.service';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';
import { AuthService } from '../../../auth/services/auth.service';
import { WishlistService } from '../../../wishlist/services/wishlist.service';

@Component({
  selector: 'app-product-by-category',
  imports: [ProductCardComponent, LoadingScreenComponent, RouterLink, BreadCrumbComponent],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css',
})
export class ProductByCategoryComponent implements OnInit {
  public readonly productService = inject(ProductsService);
  public readonly categoryService = inject(CategoriesService);
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
  categoryID!: string;
  title = '';
  constructor() {
    this.activeRoute.paramMap.subscribe((param) => {
      this.categoryID = param.get('id')!;
      this.categoryService.getSpecificCategory(this.categoryID);
      this.getAllProductsByCategory();
    });
    // this.activeRoute.fragment.subscribe((frag) => {
    //   this.title = frag!;
    // });
  }
  getAllProductsByCategory() {
    this.productService.getProductsByCategory(this.categoryID);
  }
}
