import { inject, Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { signIn, User } from '../interfaces/signIn';
import { STORED_KEYS } from '../../../core/contstants/storedKey';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttp {
  private readonly router = inject(Router);
  signUp(user: {}) {
    return this.httpClient.post(APIS_KYS.AUTH.signUp, user);
  }
  signIn(user: User) {
    return this.httpClient.post<signIn>(APIS_KYS.AUTH.signIn, user);
  }
  logOut() {
    localStorage.removeItem(STORED_KEYS.UserToken);
    this.router.navigate(['/login']);
  }
  decodeToken(token: string): void | boolean {
    try {
      console.log('decodeToken', jwtDecode(token));
      return true;
    } catch {
      this.logOut();
    }
  }
}
