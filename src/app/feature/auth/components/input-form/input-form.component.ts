import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { on } from 'events';

@Component({
  selector: 'app-input-form',
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputFormComponent), multi: true },
  ],
})
export class InputFormComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() type!: string;
  @Input() control: AbstractControl | null = null;
  @Input() label!: string;
  @Input() group: FormGroup | null = null;
  value = '';
  onChange = (value: string) => {};
  disabled = false;
  onTouched = () => {};
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  flag = true;
  toggle() {
    if (this.id == 'password' || this.id == 'rePassword') {
      this.flag = !this.flag;
      this.type = this.flag ? 'password' : 'text';
    }
  }
}
