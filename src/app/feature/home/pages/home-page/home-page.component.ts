import { Component, inject, PLATFORM_ID } from '@angular/core';
import { MainSlide } from '../../components/main-slide/main-slide';
import { HomeProductsComponent } from '../../components/home-products/home-products.component';
import { SliderCategoryComponent } from '../../components/slider-category/slider-category.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [MainSlide, HomeProductsComponent, SliderCategoryComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private readonly platID = inject(PLATFORM_ID);
  isBrowser = false;
  constructor() {
    this.isBrowser = isPlatformBrowser(this.platID);
  }
}
