import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../categories/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { getOwlOptions } from '../../../../core/services/utilites/owlCoursl.service';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-slider-category',
  imports: [CarouselModule, SectionTitleComponent, LoadingScreenComponent],
  templateUrl: './slider-category.component.html',
  styleUrl: './slider-category.component.css',
})
export class SliderCategoryComponent implements OnInit {
  public readonly categoryService = inject(CategoriesService);
  customOptions: OwlOptions = getOwlOptions({
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    autoplay: true,
  });
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryService.getAllCategories();
  }
}
