import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFormComponent } from '../../../auth/components/input-form/input-form.component';
import { SettingService } from '../../services/setting.service';
import { ToastrService } from 'ngx-toastr';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';

@Component({
  selector: 'app-edit-info',
  imports: [ReactiveFormsModule, InputFormComponent],
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css',
})
export class EditInfoComponent {
  private readonly fb = inject(FormBuilder);
  private readonly settingServices = inject(SettingService);
  private readonly toast = inject(ToastrService);
  isLoading = false;
  errMessage = '';
  constructor() {
    this.formEditPass();
  }
  editInfo!: FormGroup;
  formEditPass() {
    this.editInfo = this.fb.group(
      {
        currentPassword: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
            ),
          ],
        ],
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
  confirmPassword(control: AbstractControl) {
    if (control.get('password')?.value === control.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
  sendData() {
    console.log(this.editInfo.value);

    if (this.editInfo.valid) {
      this.isLoading = true;
      this.settingServices.editInfoUser(this.editInfo.value).subscribe({
        next: (resp) => {
          this.isLoading = false;
          localStorage.setItem(STORED_KEYS.UserToken, resp.token);
          console.log(resp.token);

          this.toast.success('<h5 class="text-xl">Change Password Successfully!</h5>', undefined, {
            enableHtml: true,
            progressBar: true,
          });
        },
        error: (err) => {
          this.isLoading = false;
          this.errMessage = err.errors;
          this.toast.error(`<h5 class="text-xl">${err.message}!</h5>`, undefined, {
            enableHtml: true,
            progressBar: true,
          });
        },
      });
    }
  }
}
