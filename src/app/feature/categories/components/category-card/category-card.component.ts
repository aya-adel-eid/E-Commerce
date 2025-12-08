import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../interfaces/IAllCategories';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: Category;
}
