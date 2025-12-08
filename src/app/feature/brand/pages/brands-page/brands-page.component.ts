import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { BrandCardComponent } from '../../components/brand-card/brand-card.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-brands-page',
  imports: [BrandCardComponent, LoadingScreenComponent, SectionTitleComponent],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.css',
})
export class BrandsPageComponent implements OnInit {
  public readonly brandService = inject(BrandsService);
  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands() {
    this.brandService.getAllBrands();
  }
}
