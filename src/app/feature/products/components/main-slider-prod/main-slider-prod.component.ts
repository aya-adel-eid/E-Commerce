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
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  slides = [
    {
      img: '/images/mplc-slider-slide-1-opt.jpg-1.webp',
      tag: 'New Arrivals',
      title: 'Fresh picks for your everyday life',
      text: 'Discover the latest products at the best prices.',
    },
    {
      img: '/images/mplc-slider-slide-2-opt.jpg',
      tag: 'Best Sellers',
      title: 'Top-rated products loved by customers',
      text: 'Quality you can trust, delivered to your door.',
    },
    {
      img: '/images/mplc-slider-slide-3-opt.jpg',
      tag: 'Hot Deals',
      title: 'Save more on your favorite brands',
      text: 'Limited-time offers, don’t miss out.',
    },
  ];
}
