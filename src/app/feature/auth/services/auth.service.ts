import { inject, Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { signIn, User } from '../interfaces/signIn';
import { STORED_KEYS } from '../../../core/contstants/storedKey';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { forgetPass } from '../interfaces/forgetPass';
import { ResetPass } from '../interfaces/ResetPass ';
import { Observable } from 'rxjs';
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
    localStorage.removeItem(STORED_KEYS.UserId);
    this.router.navigate(['/login']);
  }
  decodeToken(token: string): void | boolean {
    try {
      const id = (jwtDecode(token) as { id: string })?.id;
      localStorage.setItem(STORED_KEYS.UserId, id);
      return true;
    } catch {
      this.logOut();
    }
  }
  forgetPass(email: {}) {
    return this.httpClient.post<forgetPass>(APIS_KYS.AUTH.forgetPass, email);
  }
  verifyResetCode(code: {}) {
    return this.httpClient.post<forgetPass>(APIS_KYS.AUTH.verifyCode, code);
  }
  resetPassword(code: {}): Observable<any> {
    return this.httpClient.put<forgetPass>(APIS_KYS.AUTH.resetPass, code);
  }
  // verifyToken(){
  // this.httpClient.get(APIS_KYS.AUTH.verifyToken,headers:
  //   {token:localStorage.getItem(STORED_KEYS.UserToken)}
  // )
  // }
}
