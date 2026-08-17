import { Component, inject } from '@angular/core';
// import { NotificationService } from '../core/services/notification.service';
import { NotificationsService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-global-error',
  imports: [],
  template: `
    @if (notificationService.activeError(); as error) {
      <div class="toast-error" role="alert">
        <div class="toast-content">
          <strong>Error {{ error.status !== 0 ? error.status : 'Conexión' }}</strong>
          <p>{{ error.message }}</p>
        </div>
        <button type="button" (click)="notificationService.clearError()" aria-label="Cerrar">✕</button>
      </div>
    }
  `,
  styles: [`
    .toast-error {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #ef4444;
      color: #ffffff;
      padding: 1rem 1.25rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 9999;
    }
    .toast-content p {
      margin: 0.25rem 0 0 0;
      font-size: 0.875rem;
    }
    button {
      background: none;
      border: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  `]
})
export class GlobalErrorComponent {
  readonly notificationService = inject(NotificationsService);
}
