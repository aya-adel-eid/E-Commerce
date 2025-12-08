import { Component } from '@angular/core';
import { MainSlide } from '../../components/main-slide/main-slide';
import { HomeProductsComponent } from '../../components/home-products/home-products.component';
import { SliderCategoryComponent } from '../../components/slider-category/slider-category.component';

@Component({
  selector: 'app-home-page',
  imports: [MainSlide, HomeProductsComponent, SliderCategoryComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
