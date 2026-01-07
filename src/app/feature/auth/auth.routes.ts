import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

export const AUth_ROutES: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then((c) => c.RegisterComponent),
    title: 'SignUp',
  },
  {
    path: 'forgetPassword',
    loadComponent: () =>
      import('./pages/forget-password/forget-password.component').then(
        (c) => c.ForgetPasswordComponent
      ),
    title: 'ForgetPassword',
  },
];
