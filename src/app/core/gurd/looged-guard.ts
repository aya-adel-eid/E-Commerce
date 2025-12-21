import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { STORED_KEYS } from '../contstants/storedKey';
import { AuthService } from '../../feature/auth/services/auth.service';

export const loogedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platID = inject(PLATFORM_ID);
  const authService = inject(AuthService);
  if (isPlatformBrowser(platID)) {
    const token = localStorage.getItem(STORED_KEYS.UserToken);
    if (token && authService.decodeToken(token)) {
      console.log('GUARD TOKEN:', localStorage.getItem(STORED_KEYS.UserToken));
      return router.parseUrl('/home');
    }
  }
  return true;
};
// import { inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { CanActivateFn, Router } from '@angular/router';
// import { STORED_KEYS } from '../contstants/storedKey';
// import { AuthService } from '../../feature/auth/services/auth.service';

// export const loogedGuard: CanActivateFn = (route, state) => {
//   const _Router = inject(Router);
//   const platformId = inject(PLATFORM_ID);
//   const isBrowser = isPlatformBrowser(platformId);
//   const authService = inject(AuthService);

//   if (!isBrowser) return true;

//   const token = localStorage.getItem(STORED_KEYS.UserToken);

//   const isAuthPath = state.url.startsWith('/login') || state.url.startsWith('/register');

//   if (!token && !isAuthPath) {
//     return _Router.parseUrl('/login');
//   }

//   if (token && authService.decodeToken(token) && isAuthPath) {
//     return _Router.parseUrl('/home');
//   }

//   return true;
// };
