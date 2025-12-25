import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../feature/categories/services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  public readonly categoriesService = inject(CategoriesService);
  ngOnInit(): void {
    this.categoriesService.getAllCategories();
  }
}
