import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { AppApiError } from '../models/api-error.model';

export class HttpInterceptorError extends Error {
  constructor(public override message: string, public status: number) {
    super(message);
    this.name = 'HttpInterceptorError';
  }
}
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationsService);
  //return next(req);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error inesperado en la comunicación con el servidor.';

      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente o problema de red local
        errorMessage = `Error de red local: ${error.error.message}`;
      } else {
        // Respuesta de error devuelta por el servidor (backend)
        switch (error.status) {
          case 400:
            errorMessage = error.error?.message || 'Solicitud incorrecta (Bad Request).';
            break;
          case 401:
            errorMessage = 'No autorizado. La sesión ha expirado o las credenciales no son válidas.';
            // Opcional: Redireccionar a login usando Router
            break;
          case 403:
            errorMessage = 'No tienes permisos suficientes para realizar esta acción.';
            break;
          case 404:
            errorMessage = 'El recurso solicitado no fue encontrado.';
            break;
          case 500:
            errorMessage = 'Error interno en el servidor backend.';
            break;
          case 503:
            errorMessage = 'El servicio no está disponible temporalmente.';
            break;
          default:
            errorMessage = `Error de servidor (${error.status}): ${error.statusText || 'Desconocido'}`;
        }
      }

      const formattedError: AppApiError = {
        status: error.status,
        message: errorMessage,
        details: error.error,
        timestamp: new Date()
      };

      // Registrar error en consola para depuración
      console.error(`[HTTP Error ${error.status}] path: ${req.url}`, formattedError);

      // Notificar dinámicamente al usuario a través del servicio
      notificationService.showError(formattedError);

      // Relanzar el error envuelto para que el servicio/componente llamador lo reciba si lo necesita
      return throwError(() => new HttpInterceptorError(errorMessage, error.status));
    })
  );
};
