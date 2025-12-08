import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryCardComponent, SectionTitleComponent, LoadingScreenComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css',
})
export class CategoriesPageComponent implements OnInit {
  public readonly categoriesService = inject(CategoriesService);
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoriesService.getAllCategories();
  }
}
