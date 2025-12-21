import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CartDetails, ICartResp, Product } from '../interfaces/ICartResp';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { STORED_KEYS } from '../../../core/contstants/storedKey';
import { ICartReq } from '../interfaces/ICartReq';
import { isPlatformBrowser } from '@angular/common';
import { IUptadeCartResp } from '../interfaces/IUptadeCartResp';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseHttp {
  userCart!: CartDetails;
  private readonly plat_id = inject(PLATFORM_ID);
  numOfCartItems!: number;
  getAllProductsInCart() {
    if (isPlatformBrowser(this.plat_id)) {
      return this.httpClient.get<ICartResp>(APIS_KYS.CART.data).subscribe({
        next: (resp) => {
          this.userCart = resp.data;
          console.log(this.userCart);
          this.numOfCartItems = resp.numOfCartItems;
        },
      });
    }
    return null;
  }
  sendProductInCart(productId: {}) {
    return this.httpClient.post<ICartReq>(APIS_KYS.CART.data, productId);
  }
  updateCartItem(count: {}, id: string) {
    return this.httpClient.put<ICartResp>(`${APIS_KYS.CART.data}/${id}`, count).subscribe({
      next: (resp) => {
        this.userCart = resp.data;
        this.numOfCartItems = resp.numOfCartItems;
        console.log(resp.data);
      },
      error: (err) => {
        // console.log(err.error.message);
      },
    });
  }
  removeCartItem(id: string) {
    return this.httpClient.delete<ICartResp>(`${APIS_KYS.CART.data}/${id}`).subscribe({
      next: (resp) => {
        this.userCart = resp.data;
        this.numOfCartItems = resp.numOfCartItems;
        console.log(resp.data);
      },
      error: (err) => {
        // console.log(err.error.message);
      },
    });
  }
  deleteCartProducts() {
    return this.httpClient.delete<ICartResp>(APIS_KYS.CART.data).subscribe({
      next: (resp) => {
        this.userCart.products = [];
        this.numOfCartItems = resp.numOfCartItems;
        console.log(resp.data);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
