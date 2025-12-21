import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { Filter } from '../../../../shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-page',
  imports: [
    ProductCardComponent,
    SectionTitleComponent,
    NgxPaginationModule,
    LoadingScreenComponent,
    Filter,
    FormsModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  public readonly productsService = inject(ProductsService);
  private readonly route = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly viewportScrolle = inject(ViewportScroller);
  textSearch = '';
  //when change number of page

  page: number = 1;
  limit = 12;
  constructor() {
    const page = +this.activeRoute.snapshot.queryParamMap.get('page')!;
    // this.activeRoute.paramMap.subscribe((parm: Params) => {
    //   this.page = +parm['page'];
    // });
    this.page = page ? page : 1;
    console.log(this.page);
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productsService.getAllProducts(this.page, this.limit);
  }
  pageChange($event: number) {
    this.page = $event;

    this.getAllProducts();
    console.log(this.page);
    this.viewportScrolle.scrollToPosition([0, 0], {
      behavior: 'smooth',
    });
    this.route.navigate([], {
      queryParams: {
        page: this.page,
      },
    });
  }
}
