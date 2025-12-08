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
      { path: 'home', children: HOME_ROUTES },
      {
        path: 'product',
        children: PRODUCTS_ROUTes,
      },
      { path: 'details/:id/:slug', component: ProductDetailsComponent },
      { path: 'categories', children: Categories_Routes },
      { path: 'brand', children: BRANDS_ROUTES },
      { path: 'productsByBrand', component: ProductsByBrandsComponent },
      { path: 'productsByCategory', component: ProductByCategoryComponent },
    ],
  },
  //not
];
