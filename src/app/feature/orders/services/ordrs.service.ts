import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../../core/contstants/storedKey';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { CartItem, IOrdersResp } from '../interfaces/IOrdersResp';

@Injectable({
  providedIn: 'root',
})
export class OrdrsService extends BaseHttp {
  private readonly plat_id = inject(PLATFORM_ID);
  allOrders!: IOrdersResp[];
  cartItems!: CartItem[];
  getOrders() {
    if (isPlatformBrowser(this.plat_id)) {
      const userID = localStorage.getItem(STORED_KEYS.UserId);
      return this.httpClient.get<IOrdersResp[]>(`${APIS_KYS.ORDERS.orders}/${userID}`).subscribe({
        next: (resp) => {
          this.allOrders = resp;
        },
      });
    }
    return null;
  }
}
