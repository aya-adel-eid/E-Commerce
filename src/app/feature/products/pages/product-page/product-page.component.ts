import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
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
    RouterLink,
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
  cards = [
    { icon: 'fa-truck-fast', title: 'Free Shipping', text: 'On orders over 1500 EGP' },
    { icon: 'fa-shield-halved', title: 'Secure Payment', text: '100% protected checkout' },
    { icon: 'fa-rotate-left', title: 'Easy Returns', text: '14-day return policy' },
    { icon: 'fa-headset', title: '24/7 Support', text: 'We are always here' },
  ];

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
    this.productsService.getAllProducts(this.page, this.limit);
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
