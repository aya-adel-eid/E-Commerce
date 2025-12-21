import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';
import { InputFormComponent } from '../input-form/input-form.component';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';

@Component({
  selector: 'app-forget-password-form',
  imports: [ReactiveFormsModule, InputFormComponent],
  templateUrl: './forget-password-form.component.html',
  styleUrl: './forget-password-form.component.css',
})
export class ForgetPasswordFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  step = 1;
  successMsg = '';
  errorMsg = '';
  email!: FormGroup;
  verifyCode!: FormGroup;
  updatePassword!: FormGroup;
  constructor() {
    this.initForm();
  }
  initForm() {
    this.email = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
    this.verifyCode = this.fb.group({
      resetCode: [null, [Validators.required, Validators.pattern(/^[0-9]{6}/)]],
    });
    this.updatePassword = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
        ),
      ]),
    });
  }
  //1
  sendEmail() {
    this.successMsg = '';
    this.errorMsg = '';
    if (this.email.valid) {
      console.log(this.email.value);

      this.authService.forgetPass(this.email.value).subscribe({
        next: (resp) => {
          this.step = 2;
          this.successMsg = resp.message;

          console.log(resp);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);

          this.errorMsg = err.error.message;
        },
      });
    }
  }
  //2
  verifyCodeData() {
    this.successMsg = '';
    this.errorMsg = '';
    if (this.verifyCode.valid) {
      this.authService.verifyResetCode(this.verifyCode.value).subscribe({
        next: (resp) => {
          this.step = 3;
          this.successMsg = resp.message;
          console.log(resp);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          this.errorMsg = err.error.message;
        },
      });
    }
  }
  //3
  UpdatePassword() {
    this.errorMsg = '';
    this.successMsg = '';
    if (this.updatePassword.valid) {
      this.authService.resetPassword(this.updatePassword.value).subscribe({
        next: (resp) => {
          localStorage.setItem(STORED_KEYS.UserToken, resp.token);
          this.router.navigate(['/home']);
          this.successMsg = resp.message;
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message;
          console.log(err.error.message);
        },
      });
    }
  }
}
