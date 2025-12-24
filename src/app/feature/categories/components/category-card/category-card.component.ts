import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../interfaces/IAllCategories';
import { CategoriesService } from '../../services/categories.service';
import { ImagePlaceHolderDirective } from '../../../../shared/directives/image-place-holder.directive';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink, ImagePlaceHolderDirective],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: Category;
  public readonly categoriesServices = inject(CategoriesService);
}
