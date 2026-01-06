import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { BaseHttp } from '../../../core/services/utilites/base-http';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { signIn, User } from '../interfaces/signIn';
import { STORED_KEYS } from '../../../core/contstants/storedKey';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { forgetPass } from '../interfaces/forgetPass';
import { ResetPass } from '../interfaces/ResetPass ';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IUserInfo, UserData } from '../interfaces/IUserInfo';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttp {
  private readonly router = inject(Router);
  private readonly platID = inject(PLATFORM_ID);

  // isAuth: boolean = false;
  isAuth = signal<boolean>(false);
  useInfo!: UserData;
  signUp(user: {}) {
    return this.httpClient.post(APIS_KYS.AUTH.signUp, user);
  }
  signIn(user: User) {
    return this.httpClient.post<signIn>(APIS_KYS.AUTH.signIn, user);
  }
  logOut() {
    localStorage.removeItem(STORED_KEYS.UserToken);
    localStorage.removeItem(STORED_KEYS.UserId);
    this.isAuth.set(false);

    localStorage.removeItem('userName');
    this.router.navigate(['/home']);
  }
  decodeToken(token: string): void | boolean {
    try {
      this.isAuth.set(true);
      const id = (jwtDecode(token) as { id: string })?.id;
      localStorage.setItem(STORED_KEYS.UserId, id);
      const name = (jwtDecode(token) as { name: string })?.name;

      localStorage.setItem('userName', name);
      return true;
    } catch {
      this.isAuth.set(false);
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
  // profile
  getInfo(id: string) {
    return this.httpClient.get<IUserInfo>(`${APIS_KYS.AUTH.userInfo}/${id}`).subscribe({
      next: (user) => {
        this.useInfo = user.data;
      },
    });
  }
  checkAuthOnInit() {
    if (isPlatformBrowser(this.platID)) {
      const token = localStorage.getItem(STORED_KEYS.UserToken);

      if (token) {
        this.decodeToken(token);
      } else {
        this.isAuth.set(false);
      }
    }
  }

  // verifyToken(){
  // this.httpClient.get(APIS_KYS.AUTH.verifyToken,headers:
  //   {token:localStorage.getItem(STORED_KEYS.UserToken)}
  // )
  // }
}
