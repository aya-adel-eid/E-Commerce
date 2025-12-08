import { Component, inject, PLATFORM_ID } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';
import { signIn } from '../../interfaces/signIn';
import { ToastrService } from 'ngx-toastr';
import { interval, take } from 'rxjs';
@Component({
  selector: 'app-login-form',
  imports: [InputFormComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly platId = inject(PLATFORM_ID);
  private readonly toastrService = inject(ToastrService);
  messagErro = '';
  constructor() {
    this.signIn();
  }
  loginForm!: FormGroup;
  isLoading = false;
  signIn() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  showSuccessMessage(message: string) {
    this.toastrService.success(message, '', {
      progressBar: true,

      toastClass: 'ngx-toastr custom-success-icon',
      timeOut: 3000,
    });
  }
  login() {
    if (this.isLoading) return;
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.signIn(this.loginForm.value).subscribe({
        next: (resp: signIn) => {
          this.isLoading = false;
          console.log(resp);
          const token = resp.token;
          if (isPlatformBrowser(this.platId)) {
            localStorage.setItem(STORED_KEYS.UserToken, token);
          }
          this.authService.decodeToken(token);
          interval(1000)
            .pipe(take(5))
            .subscribe(() => {
              this.router.navigateByUrl('/home');
            });
          this.showSuccessMessage('Login Successfully');
        },
        error: (err: HttpErrorResponse) => {
          this.messagErro = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
