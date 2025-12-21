import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { Brand, IAllBrands } from '../interfaces/IAllBrands';
import { ISpecificBrand, SpecificBrand } from '../interfaces/ISpecificBrand';

@Injectable({
  providedIn: 'root',
})
export class BrandsService extends BaseHttp {
  allBrands!: Brand[];
  specificBrand!: SpecificBrand;
  getAllBrands() {
    return this.httpClient.get<IAllBrands>(APIS_KYS.Brands.allBrands).subscribe({
      next: (resp) => {
        this.allBrands = resp.data;
      },
    });
  }
  getSpecificBrand(id: string) {
    return this.httpClient.get<ISpecificBrand>(`${APIS_KYS.Brands.allBrands}/${id}`).subscribe({
      next: (resp) => {
        this.specificBrand = resp.data;
      },
    });
  }
}
