import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary-card',
  imports: [RouterLink],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css',
})
export class SummaryCardComponent {
  @Input() totalPrice!: number;
  @Input({ required: true }) cartID!: string;
}
