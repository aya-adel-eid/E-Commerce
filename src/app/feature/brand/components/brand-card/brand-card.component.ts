import { Component, inject, Input } from '@angular/core';
import { Brand } from '../../interfaces/IAllBrands';
import { RouterLink } from '@angular/router';
import { BrandsService } from '../../services/brands.service';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';

@Component({
  selector: 'app-brand-card',
  imports: [RouterLink, ImagePlaceHolderDirective],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.css',
})
export class BrandCardComponent {
  @Input({ required: true }) brand!: Brand;
  private readonly brandServices = inject(BrandsService);
  getSpecificBrand(id: string) {
    this.brandServices.getSpecificBrand(id);
  }
}
