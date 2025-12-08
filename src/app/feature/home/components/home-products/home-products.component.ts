import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-home-products',
  imports: [ProductCardComponent, SectionTitleComponent, LoadingScreenComponent],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent implements OnInit {
  public readonly productService = inject(ProductsService);
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProducts();
  }
}
