import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-slide',
  imports: [CarouselModule, RouterLink],
  templateUrl: './main-slide.html',
  styleUrl: './main-slide.css',
})
export class MainSlide {
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
    { img: '/images/img1.avif', tag: 'New Arrivals', title: 'Fresh picks for your everyday life' },
    { img: '/images/img2.avif', tag: 'Best Sellers', title: 'Top-rated products you will love' },
    { img: '/images/img3.avif', tag: 'Hot Deals', title: 'Save more on your favorite brands' },
    { img: '/images/img4.avif', tag: 'Trending', title: 'What everyone is buying right now' },
    { img: '/images/img5.avif', tag: 'Limited', title: 'Limited-time offers, do not miss out' },
    { img: '/images/img6.avif', tag: 'Exclusive', title: 'Exclusive products at the best price' },
    { img: '/images/img7.avif', tag: 'Free Shipping', title: 'Free delivery on selected items' },
  ];

  banners = [
    { img: '/images/slider-image-2.jpeg', title: 'Special Offers' },
    { img: '/images/slider-image-3.jpeg', title: 'New Collection' },
  ];
}
