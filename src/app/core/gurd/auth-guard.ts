import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { platform } from 'os';
import { STORED_KEYS } from '../contstants/storedKey';
import { AuthService } from '../../feature/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platID = inject(PLATFORM_ID);
  const authService = inject(AuthService);
  if (!isPlatformBrowser(platID)) {
    return true;
  }
  // && authService.decodeToken(token)
  if (isPlatformBrowser(platID)) {
    const token = localStorage.getItem(STORED_KEYS.UserToken);
    if (token && authService.decodeToken(token)) {
      console.log(token, 55);

      return true;
    }
  }
  return router.parseUrl('/login');
};
