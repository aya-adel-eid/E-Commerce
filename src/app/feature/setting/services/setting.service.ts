import { inject, Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';

@Injectable({
  providedIn: 'root',
})
export class SettingService extends BaseHttp {
  editInfoUser(infoUser: {}) {
    return this.httpClient.put<any>(`${APIS_KYS.AUTH.changePassword}`, infoUser);
  }
}
