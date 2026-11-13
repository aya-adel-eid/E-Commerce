import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, BreadCrumbComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  icons = [
    { icon: 'fa-truck-fast', text: 'Free shipping' },
    { icon: 'fa-shield-halved', text: 'Secure payment' },
    { icon: 'fa-rotate-left', text: 'Easy returns' },
  ];
}
