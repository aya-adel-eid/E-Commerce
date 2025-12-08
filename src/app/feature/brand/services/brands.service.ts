import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { Brand, IAllBrands } from '../interfaces/IAllBrands';

@Injectable({
  providedIn: 'root',
})
export class BrandsService extends BaseHttp {
  allBrands!: Brand[];
  getAllBrands() {
    return this.httpClient.get<IAllBrands>(APIS_KYS.Brands.allBrands).subscribe({
      next: (resp) => {
        this.allBrands = resp.data;
      },
    });
  }
}
