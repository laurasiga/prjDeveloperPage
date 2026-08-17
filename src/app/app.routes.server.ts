import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // Vista Home (Hero, Stack)
    renderMode: RenderMode.Prerender // SSG: HTML estático ultrarrápido
  },
  {
    path: 'projects',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'experience',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Server // SSR: Renderizado dinámico por petición
  },
  {
    path: '**',
    renderMode: RenderMode.Client // Fallback a renderizado tradicional de Single Page Application
  }
  
];
