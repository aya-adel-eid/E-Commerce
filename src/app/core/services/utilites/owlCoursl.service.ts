import { OwlOptions } from 'ngx-owl-carousel-o';
export function getOwlOptions(options?: OwlOptions): OwlOptions {
  return {
    loop: true,
    margin: options?.margin ? options.margin : 0,
    autoplay: options?.autoplay ? options.autoplay : false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: options?.responsive ? options.responsive : {},
    items: options?.items ? options.items : 0,

    nav: options?.nav ? options.nav : true,
  };
}
