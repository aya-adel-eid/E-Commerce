import { Routes } from '@angular/router';
import { BrandsPageComponent } from './pages/brands-page/brands-page.component';

export const BRANDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/brands-page/brands-page.component').then((c) => c.BrandsPageComponent),
  },
];
