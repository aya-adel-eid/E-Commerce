import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseHttp {
  allCategories!: Category[];
  getAllCategories() {
    return this.httpClient.get<IAllCategories>(APIS_KYS.CATEGORIEs.allCategory).subscribe({
      next: (resp) => {
        this.allCategories = resp.data;
        console.log(this.allCategories);
      },
    });
  }
}
