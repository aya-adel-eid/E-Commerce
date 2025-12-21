import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const ngxSpinnerService = inject(NgxSpinnerService);
  console.log(req, 'loading');
  if (req.urlWithParams.includes('categories') || req.urlWithParams.includes('brands'))
    return next(req);
  ngxSpinnerService.show('ball-scale');
  return next(req).pipe(
    finalize(() => {
      ngxSpinnerService.hide('ball-scale');
    })
  );
};
