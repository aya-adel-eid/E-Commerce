import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { Products } from '../../interfaces/IAllProducts';

@Component({
  selector: 'app-products-by-brands',
  imports: [ProductCardComponent, LoadingScreenComponent],
  templateUrl: './products-by-brands.component.html',
  styleUrl: './products-by-brands.component.css',
})
export class ProductsByBrandsComponent {
  public readonly productsService = inject(ProductsService);
  titleBrand = '';
  private readonly activeRoute = inject(ActivatedRoute);
  brandID!: string;
  filterByBrand!: Products[];
  constructor() {
    this.activeRoute.queryParamMap.subscribe({
      next: (param) => {
        this.brandID = param.get('brand')!;
        this.getProductsByBrand();
      },
    });
    this.activeRoute.fragment.subscribe({
      next: (frag) => {
        this.titleBrand = frag!;
      },
    });
  }
  getProductsByBrand() {
    this.productsService.getProductsByBrand(this.brandID);
  }
}
