import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { CategoriesService } from '../../../categories/services/categories.service';

@Component({
  selector: 'app-product-by-category',
  imports: [ProductCardComponent, LoadingScreenComponent, RouterLink],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css',
})
export class ProductByCategoryComponent {
  public readonly productService = inject(ProductsService);
  public readonly categoryService = inject(CategoriesService);
  private readonly activeRoute = inject(ActivatedRoute);
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
