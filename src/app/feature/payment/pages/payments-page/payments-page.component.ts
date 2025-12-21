import { Component } from '@angular/core';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';

@Component({
  selector: 'app-payments-page',
  imports: [PaymentFormComponent],
  templateUrl: './payments-page.component.html',
  styleUrl: './payments-page.component.css',
})
export class PaymentsPageComponent {}
