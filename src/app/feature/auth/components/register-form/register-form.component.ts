import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';
import { InputFormComponent } from '../input-form/input-form.component';
@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, InputFormComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent implements OnInit {
  //
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly toastrService = inject(ToastrService);
  private readonly router = inject(Router);
  count = 5;
  registerForm!: FormGroup;
  errMessage = '';
  isShow = false;

  //load in btn
  isLoading = false;
  ngOnInit(): void {
    this.formRegister();
  }
  showSuccessMessage(message: string) {
    this.toastrService.success(message, '', {
      progressBar: true,
      // positionClass: 'toast-custom-position',
      toastClass: 'ngx-toastr custom-success-icon',
      timeOut: 5000,
    });
  }

  formRegister() {
    this.registerForm = this.fb.group(
      {
        name: [null, [Validators.maxLength(20), Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
            ),
          ],
        ],
        rePassword: [null],
      },
      { validators: this.confirmPassword }
    );
  }
  sendData() {
    this.registerForm.markAllAsTouched();
    console.log(this.registerForm);
    if (this.isLoading) return;
    console.log('send');

    this.errMessage = '';

    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.signUp(this.registerForm.value).subscribe({
        next: (resp) => {
          this.isLoading = false;
          console.log(resp);
          interval(1000)
            .pipe(take(5))
            .subscribe(() => {
              --this.count;
              if (this.count === 0) {
                this.router.navigateByUrl('/login');
              }
            });
          this.showSuccessMessage(`Account created successfully
           you will be redirect to login in ${this.count} second`);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err);
          this.errMessage = err.error.message;
        },
      });
      console.log(this.registerForm);
      console.log(this.registerForm.value);
    }
  }
  confirmPassword(control: AbstractControl) {
    if (control.get('password')?.value === control.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
}
