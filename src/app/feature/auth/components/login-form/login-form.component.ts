import { Component, EventEmitter, inject, Output, PLATFORM_ID } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';
import { signIn } from '../../interfaces/signIn';
import { ToastrService } from 'ngx-toastr';
import { interval, take } from 'rxjs';
@Component({
  selector: 'app-login-form',
  imports: [InputFormComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly platId = inject(PLATFORM_ID);
  private readonly toastrService = inject(ToastrService);
  @Output() loginSuccess = new EventEmitter<void>();
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

          this.authService.isAuth.set(true);
          const token = resp.token;
          this.loginSuccess.emit();
          localStorage.setItem(STORED_KEYS.UserToken, token);

          this.authService.decodeToken(token);
          interval(1000)
            .pipe(take(5))
            .subscribe(() => {
              this.router.navigateByUrl('/home');
            });
          this.showSuccessMessage('Login Successfully');
        },
        error: (err: HttpErrorResponse) => {
          this.authService.isAuth.set(false);
          this.messagErro = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
