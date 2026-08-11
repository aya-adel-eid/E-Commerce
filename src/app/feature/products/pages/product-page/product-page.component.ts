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
import { MainSliderProdComponent } from '../../components/main-slider-prod/main-slider-prod.component';
import { CategoriesService } from '../../../categories/services/categories.service';
import { CategpryProdComponent } from '../../../categories/components/categpry-prod/categpry-prod.component';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';
import { AuthService } from '../../../auth/services/auth.service';
import { WishlistService } from '../../../wishlist/services/wishlist.service';
@Component({
  selector: 'app-product-page',
  imports: [
    ProductCardComponent,
    SectionTitleComponent,
    NgxPaginationModule,
    LoadingScreenComponent,
    Filter,
    FormsModule,
    MainSliderProdComponent,
    CategpryProdComponent,
    BreadCrumbComponent,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  public readonly productsService = inject(ProductsService);
  private readonly route = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly viewportScrolle = inject(ViewportScroller);
  public readonly categoryServices = inject(CategoriesService);
  private readonly authServices = inject(AuthService);
  private readonly wishlistServices = inject(WishlistService);
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
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts() {
    this.productsService.getAllProducts(this.page, this.limit).subscribe({
      next: (resp) => {
        this.productsService.allProducts = resp.data;
        this.productsService.total = resp.results;

        this.productsService.loadingPage = false;
      },
    });
    if (this.authServices.isAuth()) {
      // this.wishlistServices.wishlistID();
      this.wishlistServices.getAllProductsInWishlist();
    } else {
      this.wishlistServices.reset();
    }
  }
  getAllCategory() {
    this.categoryServices.getAllCategories();
  }
  pageChange($event: number) {
    this.page = $event;

    this.getAllProducts();

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
