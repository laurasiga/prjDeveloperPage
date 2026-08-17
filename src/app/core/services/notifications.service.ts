import { Injectable, signal } from '@angular/core';
import { AppApiError } from '../models/api-error.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // Signal de estado global para errores
  readonly activeError = signal<AppApiError | null>(null);

  showError(error: AppApiError): void {
    this.activeError.set(error);
  }

  clearError(): void {
    this.activeError.set(null);
  }
}
