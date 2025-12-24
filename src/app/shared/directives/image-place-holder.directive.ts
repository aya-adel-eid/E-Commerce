import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[imagePlaceHolder]',
})
export class ImagePlaceHolderDirective implements OnInit {
  private readonly element = inject(ElementRef<HTMLImageElement>);
  private readonly render2 = inject(Renderer2);
  private readonly plat_Id = inject(PLATFORM_ID);
  currentElement = this.element.nativeElement as HTMLImageElement;
  private elementSpan!: HTMLElement;
  ngOnInit(): void {
    if (!isPlatformBrowser(this.plat_Id)) {
      return;
    }
    // const elementSpan = document.createElement('span');
    this.elementSpan = this.render2.createElement('span');
    this.render2.addClass(this.elementSpan, 'bg-gray-500');
    this.render2.addClass(this.elementSpan, 'absolute');
    this.render2.addClass(this.elementSpan, 'inset-0');
    // elementSpan.classList.add('bg-gray-500', 'absolute', 'inset-0');
    this.render2.appendChild(this.currentElement.parentElement, this.elementSpan);
    // this.currentElement.after(this.elementSpan);
    this.render2.addClass(this.currentElement.parentElement, 'relative');
  }
  ngAfterViewInit() {
    if (this.currentElement.complete) {
      if (this.elementSpan && this.currentElement.parentElement) {
        this.render2.removeChild(this.currentElement.parentElement, this.elementSpan);
      }
    }
  }
  @HostListener('load')
  imageLoader() {
    if (this.elementSpan && this.currentElement.parentElement) {
      this.render2.removeChild(this.currentElement.parentElement, this.elementSpan);
    }
    // this.currentElement.nextElementSibling?.remove();
  }
}
