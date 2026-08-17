import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private readonly TOKEN_KEY = 'auth_token';

  // Signal con el estado actual del token
  readonly token = signal<string | null>(this.getTokenFromStorage());

  /**
   * Obtiene el token JWT almacenado.
   */
  getToken(): string | null {
    return this.token();
  }

  /**
   * Guarda el token al iniciar sesión exitosamente.
   */
  setToken(newToken: string): void {
    localStorage.setItem(this.TOKEN_KEY, newToken);
    this.token.set(newToken);
  }

  /**
   * Elimina el token al cerrar sesión.
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.token.set(null);
  }

  private getTokenFromStorage(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
