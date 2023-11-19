import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';
import { appRoutes } from "./app/app.routes";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
      importProvidersFrom(BrowserModule),
      {
          provide: LocationStrategy,
          useClass: PathLocationStrategy,
      },
      provideHttpClient(withInterceptorsFromDi()),
  ]
})
.catch(err => console.error(err));
