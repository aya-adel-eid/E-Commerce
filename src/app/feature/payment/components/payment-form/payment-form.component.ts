import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFormComponent } from '../../../auth/components/input-form/input-form.component';
import { PaymentsService } from '../../services/payments.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment-form',
  imports: [ReactiveFormsModule, InputFormComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',
})
export class PaymentFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly paymentServices = inject(PaymentsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  paymentUSer!: FormGroup;
  selectedPay: 'cash' | 'online' = 'cash';
  cartId!: string;
  constructor() {
    this.paymentForm();
    this.getCartID();
  }
  getCartID() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.cartId = param.get('CartId')!;
    });
  }
  paymentForm() {
    this.paymentUSer = this.fb.group({
      details: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
      city: [null, [Validators.required]],
    });
  }
  payment() {
    if (this.paymentUSer.valid) {
      console.log(this.paymentUSer.value);
      console.log(this.selectedPay);

      switch (this.selectedPay) {
        case 'cash': {
          this.cashPayment();
          break;
        }
        case 'online': {
          this.onlinePayment();
          break;
        }
      }
    }
  }
  cashPayment() {
    this.paymentServices.cashPayment(this.cartId, this.paymentUSer.value);
  }
  onlinePayment() {
    this.paymentServices.onlinePayment(this.cartId, this.paymentUSer.value);
  }
}
