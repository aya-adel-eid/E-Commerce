import { Component, inject, Input } from '@angular/core';
import { Category } from '../../interfaces/IAllCategories';
import { CategoriesService } from '../../services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categpry-prod',
  imports: [RouterLink],
  templateUrl: './categpry-prod.component.html',
  styleUrl: './categpry-prod.component.css',
})
export class CategpryProdComponent {
  @Input() category!: Category;
  public readonly categoryServices = inject(CategoriesService);
}
