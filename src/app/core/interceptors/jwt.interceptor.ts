import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Lista de URLs públicas que no requieren adjuntar el token JWT
  const publicEndpoints = ['/api/v1/auth/login', '/api/v1/auth/register'];
  const isPublicEndpoint = publicEndpoints.some((url) => req.url.includes(url));

  // Si existe un token y la petición no es a un endpoint público, se adjunta la cabecera
  if (token && !isPublicEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  // Si no hay token o es un endpoint público, la petición continúa sin modificaciones
  return next(req);
};
