import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';

@Component({
  selector: 'app-related-peoduct',
  imports: [SectionTitleComponent, ProductCardComponent, CarouselModule, LoadingScreenComponent],
  templateUrl: './related-peoduct.component.html',
  styleUrl: './related-peoduct.component.css',
})
export class RelatedPeoductComponent implements OnInit {
  public readonly productSerices = inject(ProductsService);

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productSerices.getAllProducts();
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
        items: 5,
      },
    },
    autoplay: true,
    margin: 8,
  });
}
