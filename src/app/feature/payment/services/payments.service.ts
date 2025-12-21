import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';

import { HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { IOnlinePayment } from '../interfaces/payment';
import { Router } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService extends BaseHttp {
  private readonly plat_id = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly cartServices = inject(CartService);
  cashPayment(cartId: string, userData: {}) {
    this.httpClient
      .post(`${APIS_KYS.PAYMENtS.Cash}/${cartId}`, {
        shippingAddress: userData,
      })
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.router.navigateByUrl('/allorders');
          this.cartServices.numOfCartItems = 0;
        },
      });
  }
  onlinePayment(cartId: string, userData: {}) {
    const param = new HttpParams().append('url', environment.appUrl);
    this.httpClient
      .post<IOnlinePayment>(
        `${APIS_KYS.PAYMENtS.Online}/${cartId}`,
        {
          shippingAddress: userData,
        },
        {
          params: param,
        }
      )
      .subscribe({
        next: (resp) => {
          console.log(resp);
          if (resp.status == 'success') {
            window.location.assign(resp.session.url);
          }
        },
      });
  }
}
