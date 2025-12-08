import { Component, Input } from '@angular/core';
import { Brand } from '../../interfaces/IAllBrands';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-card',
  imports: [RouterLink],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.css',
})
export class BrandCardComponent {
  @Input({ required: true }) brand!: Brand;
}
