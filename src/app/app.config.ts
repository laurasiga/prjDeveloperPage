import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withPreloading, PreloadAllModules, } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withComponentInputBinding(), // Permite recibir parámetros de ruta (:id) directamente como @Input() o input() signal
      withPreloading(PreloadAllModules) // Carga en segundo plano las demás rutas tras renderizar la vista inicial
    ),
    provideHttpClient(withFetch(), withInterceptors([errorHandlerInterceptor, jwtInterceptor])), provideClientHydration(withEventReplay()),
    provideClientHydration(withEventReplay())
  ]
};
