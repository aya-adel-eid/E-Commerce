import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';
@Component({
  selector: 'app-main-slide',
  imports: [CarouselModule],
  templateUrl: './main-slide.html',
  styleUrl: './main-slide.css',
})
export class MainSlide {
  customOptions: OwlOptions = getOwlOptions({
    items: 1,
    nav: false,
    autoplay: true,
  });
}
