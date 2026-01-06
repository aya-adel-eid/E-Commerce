import { Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

export const Categories_Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/categories-page/categories-page.component').then(
        (c) => c.CategoriesPageComponent
      ),
  },
];
