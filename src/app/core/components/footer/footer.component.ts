import { CommonModule } from '@angular/common';
import { Component, signal} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
// Signal para obtener el año actual dinámicamente
  readonly currentYear = signal<number>(new Date().getFullYear());

  // Redes profesionales
  readonly socialLinks: SocialLink[] = [
    // { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    // { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
    { name: 'Email', url: 'mailto:contacto@ejemplo.com', icon: '✉️' },
  ];
}
