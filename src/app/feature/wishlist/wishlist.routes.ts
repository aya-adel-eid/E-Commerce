import { Routes } from '@angular/router';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';

export const WISHLIST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/wishlist-page/wishlist-page.component').then((c) => c.WishlistPageComponent),
  },
];
