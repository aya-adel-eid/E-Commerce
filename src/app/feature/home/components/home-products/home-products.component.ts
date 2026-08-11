import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { BrandsService } from '../../../brand/services/brands.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-products',
  imports: [
    ProductCardComponent,
    SectionTitleComponent,
    LoadingScreenComponent,
    RouterLink,
    CarouselModule,
  ],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent implements OnInit {
  public readonly productService = inject(ProductsService);
  public readonly brandServices = inject(BrandsService);
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllBrands();
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (resp) => {
        this.productService.allProducts = resp.data;
        this.productService.total = resp.results;

        this.productService.loadingPage = false;
      },
    });
  }
  getAllBrands() {
    this.brandServices.getAllBrands();
  }
  customOptions: OwlOptions = getOwlOptions({
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    autoplay: true,
    margin: 5,
  });
}
