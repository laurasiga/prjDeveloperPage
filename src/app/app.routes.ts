import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Inicio | Portafolio Full Stack',
    loadComponent: () =>
      // import('../features/home/home.component').then((m) => m.HomeComponent),
    import('../app/features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    title: 'Proyectos | Portafolio Full Stack',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'projects/:id',
    title: 'Detalle del Proyecto | Portafolio Full Stack',
    loadComponent: () =>
      import('./features/projects/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent
      ),
  },
  {
    path: 'experience',
    title: 'Experiencia y Habilidades | Portafolio Full Stack',
    loadComponent: () =>
      import('./features/experience/components/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  {
    path: 'contact',
    title: 'Contacto | Portafolio Full Stack',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
