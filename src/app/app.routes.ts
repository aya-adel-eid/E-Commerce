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
import { UserInfoComponent } from './feature/auth/pages/user-info/user-info.component';
import { NotFoundComponent } from './feature/staticPages/not-found/not-found.component';

export const routes: Routes = [
  //auth
  {
    path: '',
    loadComponent: () => import('./core/layout/gust-layout/gust-layout').then((c) => c.GustLayout),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
        title: 'Products',
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./feature/products/PROdUCTS.routes').then((c) => c.PRODUCTS_ROUTes),
      },
      {
        path: 'details/:id',

        loadComponent: () =>
          import('./feature/products/pages/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent
          ),
        title: 'ProductDetails',
      },
      {
        path: 'details/:id/:slug',
        loadComponent: () =>
          import('./feature/products/pages/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent
          ),
        title: 'ProductDetails',
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./feature/categories/categories.routes').then((c) => c.Categories_Routes),
      },
      {
        path: 'brand',
        loadChildren: () => import('./feature/brand/brand.routes').then((c) => c.BRANDS_ROUTES),
      },
      {
        path: 'brands/:id',
        loadComponent: () =>
          import('./feature/products/pages/products-by-brands/products-by-brands.component').then(
            (c) => c.ProductsByBrandsComponent
          ),
        title: 'ProductsByBrands',
      },
      //
      {
        path: 'categories/:id',
        loadComponent: () =>
          import('./feature/products/pages/product-by-category/product-by-category.component').then(
            (c) => c.ProductByCategoryComponent
          ),
        title: 'ProductsByCategory',
      },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/auth-layout/auth-layout').then((m) => m.AuthLayout),
    canActivate: [loogedGuard],

    loadChildren: () => import('./feature/auth/auth.routes').then((c) => c.AUth_ROutES),
  },
  //gust

  //user
  {
    path: '',
    canActivate: [authGuard],

    component: MainLayout,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./feature/cart/cart.routes').then((c) => c.CART_ROUTES),
      },
      {
        path: 'payment/:CartId',
        loadChildren: () =>
          import('./feature/payment/payments.routes').then((c) => c.PAYMENTS_ROUTES),
      },
      {
        path: 'allorders',
        loadChildren: () => import('./feature/orders/orderes.routes').then((c) => c.ORDERS_ROUTES),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('./feature/wishlist/wishlist.routes').then((c) => c.WISHLIST_ROUTES),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./feature/auth/pages/user-info/user-info.component').then(
            (c) => c.UserInfoComponent
          ),
        title: 'UserInfo',
      },
      {
        path: 'changePassword',
        loadComponent: () =>
          import('./feature/setting/pages/change-password//change-password.component').then(
            (c) => c.ChangePasswordComponent
          ),
      },
    ],
  },

  //not
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'NoFound',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'NoFound',
  },
];
