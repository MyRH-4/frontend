import {provideAnimations} from "@angular/platform-browser/animations";
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "./app.module";
import { authInterceptorInterceptor } from "./core/interceptors/auth-interceptor.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      AppModule,
      HttpClientModule
    ),
    provideAnimations(),
    provideRouter(routes),
  ]
};
