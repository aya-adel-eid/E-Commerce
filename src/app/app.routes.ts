import { Routes } from '@angular/router';
import { authGuard } from './core/gurd/auth-guard';
import { loogedGuard } from './core/gurd/looged-guard';

export const routes: Routes = [
  // guest
  {
    path: '',
    loadComponent: () => import('./core/layout/gust-layout/gust-layout').then((c) => c.GustLayout),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./feature/home/pages/home-page/home-page.component').then(
            (c) => c.HomePageComponent,
          ),
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
            (c) => c.ProductDetailsComponent,
          ),
        title: 'ProductDetails',
      },
      {
        path: 'details/:id/:slug',
        loadComponent: () =>
          import('./feature/products/pages/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent,
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
            (c) => c.ProductsByBrandsComponent,
          ),
        title: 'ProductsByBrands',
      },
      {
        path: 'categories/:id',
        loadComponent: () =>
          import('./feature/products/pages/product-by-category/product-by-category.component').then(
            (c) => c.ProductByCategoryComponent,
          ),
        title: 'ProductsByCategory',
      },
    ],
  },

  // auth (login / register)
  {
    path: '',
    loadComponent: () => import('./core/layout/auth-layout/auth-layout').then((m) => m.AuthLayout),
    canActivate: [loogedGuard],
    loadChildren: () => import('./feature/auth/auth.routes').then((c) => c.AUth_ROutES),
  },

  // user (logged in)
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./core/layout/main-layout/main-layout').then((c) => c.MainLayout),
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
            (c) => c.UserInfoComponent,
          ),
        title: 'UserInfo',
      },
      {
        path: 'changePassword',
        loadComponent: () =>
          import('./feature/setting/pages/change-password/change-password.component').then(
            (c) => c.ChangePasswordComponent,
          ),
        title: 'ChangePassword',
      },
    ],
  },

  // not found
  {
    path: 'not-found',
    loadComponent: () =>
      import('./feature/staticPages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
    title: 'NotFound',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./feature/staticPages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
    title: 'NotFound',
  },
];
