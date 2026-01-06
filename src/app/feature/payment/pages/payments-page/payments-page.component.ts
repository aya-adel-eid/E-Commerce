import { Component } from '@angular/core';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-payments-page',
  imports: [PaymentFormComponent, BreadCrumbComponent],
  templateUrl: './payments-page.component.html',
  styleUrl: './payments-page.component.css',
})
export class PaymentsPageComponent {}
