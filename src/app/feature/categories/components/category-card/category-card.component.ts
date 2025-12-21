import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../interfaces/IAllCategories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: Category;
  public readonly categoriesServices = inject(CategoriesService);
}
