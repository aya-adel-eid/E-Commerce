import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { Category, IAllCategories } from '../interfaces/IAllCategories';
import { ISpecificCategory, SCategory } from '../interfaces/ISpecifcCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseHttp {
  allCategories!: Category[];
  category!: SCategory;
  getAllCategories() {
    return this.httpClient.get<IAllCategories>(APIS_KYS.CATEGORIEs.allCategory).subscribe({
      next: (resp) => {
        this.allCategories = resp.data;
        console.log(this.allCategories);
      },
    });
  }
  getSpecificCategory(id: string) {
    return this.httpClient
      .get<ISpecificCategory>(`${APIS_KYS.CATEGORIEs.allCategory}/${id}`)
      .subscribe({
        next: (resp) => {
          this.category = resp.data;
        },
      });
  }
}
