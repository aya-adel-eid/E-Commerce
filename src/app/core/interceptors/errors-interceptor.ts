import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const toaster = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        toaster.error('no internet connection');
      }
      if (error.status === 401) {
        toaster.error('unauthorized');
      }
      return throwError(() => error);
    })
  );
};
