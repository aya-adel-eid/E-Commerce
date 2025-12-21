import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { STORED_KEYS } from '../contstants/storedKey';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //SSR
  if (
    !req.urlWithParams.includes('cart') &&
    !req.urlWithParams.includes('orders') &&
    !req.urlWithParams.includes('wishlist')
  )
    return next(req);
  const platform_id = inject(PLATFORM_ID);
  if (isPlatformBrowser(platform_id)) {
    const token = localStorage.getItem(STORED_KEYS.UserToken)!;
    //take instance form req
    if (token) {
      req = req.clone({
        setHeaders: {
          token: token,
        },
      });
    }
  }
  return next(req);
};
