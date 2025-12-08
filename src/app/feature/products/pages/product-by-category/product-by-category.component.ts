import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-product-by-category',
  imports: [ProductCardComponent, LoadingScreenComponent],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css',
})
export class ProductByCategoryComponent {
  public readonly productService = inject(ProductsService);
  private readonly activeRoute = inject(ActivatedRoute);
  categoryID!: string;
  title = '';
  constructor() {
    this.activeRoute.queryParamMap.subscribe((param) => {
      this.categoryID = param.get('category[in]')!;
      this.getAllProductsByCategory();
    });
    this.activeRoute.fragment.subscribe((frag) => {
      this.title = frag!;
    });
  }
  getAllProductsByCategory() {
    this.productService.getProductsByCategory(this.categoryID);
  }
}
