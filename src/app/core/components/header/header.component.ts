import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
// Signal para controlar la apertura/cierre del menú móvil
  readonly isMobileMenuOpen = signal<boolean>(false);

  // Signal para controlar el tema (Claro / Oscuro)
  readonly isDarkMode = signal<boolean>(true);

  // Lista de enlaces de navegación principal
  readonly navItems: NavItem[] = [
    { label: 'Inicio', path: '/home' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Experiencia', path: '/experience' },
    { label: 'Contacto', path: '/contact' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.isDarkMode.update((dark) => !dark);
    // Cambiar la clase global en el elemento <html> para soporte de CSS
    document.documentElement.classList.toggle('dark-theme', this.isDarkMode());
  }
}
