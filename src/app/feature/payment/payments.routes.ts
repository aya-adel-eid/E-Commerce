import { Routes } from '@angular/router';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';

export const PAYMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/payments-page/payments-page.component').then((c) => c.PaymentsPageComponent),
  },
];
