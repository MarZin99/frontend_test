import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';
import { provideToastr } from 'ngx-toastr';
import { ToastComponent } from './additional/toast/toast.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideToastr({ toastComponent: ToastComponent }),
    SortPipe,
  ],
};
