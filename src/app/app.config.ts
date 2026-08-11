import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideToastr } from 'ngx-toastr';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingSpinnerInterceptor } from './core/interceptors/loading-spinner-interceptor';
import { tokenInterceptor } from './core/interceptors/token-interceptor';
import { errorsInterceptor } from './core/interceptors/errors-interceptor';
import { cacheInterceptor } from './core/interceptors/cache-interceptor';

import { environment } from '../environments/environment';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
    provideAnimations(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingSpinnerInterceptor,
        tokenInterceptor,
        errorsInterceptor,
        cacheInterceptor,
      ]),
    ),
    provideToastr(),
  ],
};
