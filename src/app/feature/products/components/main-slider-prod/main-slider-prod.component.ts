import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';

@Component({
  selector: 'app-main-slider-prod',
  imports: [CarouselModule],
  templateUrl: './main-slider-prod.component.html',
  styleUrl: './main-slider-prod.component.css',
})
export class MainSliderProdComponent {
  customOptions: OwlOptions = getOwlOptions({
    items: 1,
    nav: false,
    autoplay: true,
  });
}
