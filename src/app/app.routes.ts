import { Routes } from '@angular/router';
import { AuthLayout } from './core/layout/auth-layout/auth-layout';
import { AUth_ROutES } from './feature/auth/auth.routes';
import { MainLayout } from './core/layout/main-layout/main-layout';
import { HOME_ROUTES } from './feature/home/home.routes';
import { PRODUCTS_ROUTes } from './feature/products/PROdUCTS.routes';
import { ProductDetailsComponent } from './feature/products/pages/product-details/product-details.component';
import { Categories_Routes } from './feature/categories/categories.routes';
import { BRANDS_ROUTES } from './feature/brand/brand.routes';
import { authGuard } from './core/gurd/auth-guard';
import { loogedGuard } from './core/gurd/looged-guard';
import { ProductsByBrandsComponent } from './feature/products/pages/products-by-brands/products-by-brands.component';
import { ProductByCategoryComponent } from './feature/products/pages/product-by-category/product-by-category.component';

import { CART_ROUTES } from './feature/cart/cart.routes';
import { PAYMENTS_ROUTES } from './feature/payment/payments.routes';
import { ORDERS_ROUTES } from './feature/orders/orderes.routes';
import { WISHLIST_ROUTES } from './feature/wishlist/wishlist.routes';
import { GustLayout } from './core/layout/gust-layout/gust-layout';
import { HomePageComponent } from './feature/home/pages/home-page/home-page.component';

export const routes: Routes = [
  //auth
  {
    path: '',

    component: AuthLayout,
    canActivate: [loogedGuard],

    children: AUth_ROutES,
  },
  //user
  {
    path: '',
    canActivate: [authGuard],

    component: MainLayout,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      { path: 'home', children: HOME_ROUTES },
      {
        path: 'product',
        children: PRODUCTS_ROUTes,
      },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'details/:id/:slug', component: ProductDetailsComponent },
      { path: 'categories', children: Categories_Routes },
      { path: 'brand', children: BRANDS_ROUTES },
      { path: 'brands/:id', component: ProductsByBrandsComponent },
      //
      { path: 'categories/:id', component: ProductByCategoryComponent },
      { path: 'cart', children: CART_ROUTES },
      { path: 'payment/:CartId', children: PAYMENTS_ROUTES },
      { path: 'allorders', children: ORDERS_ROUTES },
      { path: 'wishlist', children: WISHLIST_ROUTES },
    ],
  },
  //gust
  // {
  //   path: '',
  //   component: GustLayout,
  //   canActivate: [loogedGuard],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'home',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'home',
  //       component: HomePageComponent,
  //     },
  //     {
  //       path: 'product',
  //       children: PRODUCTS_ROUTes,
  //     },
  //     { path: 'details/:id', component: ProductDetailsComponent },
  //     { path: 'details/:id/:slug', component: ProductDetailsComponent },
  //     { path: 'categories', children: Categories_Routes },
  //     { path: 'brand', children: BRANDS_ROUTES },
  //     { path: 'brands/:id', component: ProductsByBrandsComponent },
  //     //
  //     { path: 'categories/:id', component: ProductByCategoryComponent },
  //   ],
  // },

  //not
  // {
  //   path:'**',component:
  // }
];
