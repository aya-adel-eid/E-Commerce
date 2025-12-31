import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { environment } from '../../../../environments/environment.development';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { Details, IPRoductDetails } from '../interfaces/IPRoductDetails';
import { IAllProducts, Products } from '../interfaces/IAllProducts';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttp {
  allProducts!: Products[];
  productDetails!: Details;
  productsByBrand!: Products[];
  productsByCategory: Products[] = [];
  loadingPage = false;
  total: number = 0;
  resultsCategory: number = 0;
  resultsBrands: number = 0;
  getAllProducts(page: number = 1, limit: number | null = null) {
    this.loadingPage = true;
    return this.httpClient
      .get<IAllProducts>(`${APIS_KYS.PRODUCTS.allProducts}?page=${page}&limit=${limit}`)
      .subscribe({
        next: (resp) => {
          this.allProducts = resp.data;
          this.total = resp.results;
          console.log(this.allProducts);
          console.log(this.allProducts);

          this.loadingPage = false;
        },
      });
  }
  filterProductByPrice(price: number) {
    return this.httpClient
      .get<IAllProducts>(`${APIS_KYS.PRODUCTS.allProducts}?price[gte]=${price}`)
      .subscribe({
        next: (resp) => {
          this.allProducts = resp.data;
        },
      });
  }
  getProductById(productID: string) {
    return this.httpClient.get<IPRoductDetails>(APIS_KYS.PRODUCTS.allProducts + `/${productID}`);
    // .subscribe({
    //   next: (resp) => {
    //     this.productDetails = resp.data;
    //   },
    // });
  }
  getProductsByBrand(brandID: string) {
    return this.httpClient
      .get<IAllProducts>(`${APIS_KYS.PRODUCTS.allProducts}?brand=${brandID}`)
      .subscribe({
        next: (resp) => {
          this.productsByBrand = resp.data;
          this.resultsBrands = resp.results;
          console.log(this.productsByBrand);
        },
      });
  }
  getProductsByCategory(categoryID: string) {
    return this.httpClient
      .get<IAllProducts>(`${APIS_KYS.PRODUCTS.allProducts}?category[in]=${categoryID}`)
      .subscribe({
        next: (resp) => {
          this.productsByCategory = resp.data;
          this.resultsCategory = resp.results;
          console.log(this.productsByCategory, 'productCategory');
        },
      });
  }
}
