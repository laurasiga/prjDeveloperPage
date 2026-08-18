import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../../core/models/project.model'

import { PorjectCardComponent } from './porject-card.component';

const MOCK_PROJECT: Project = {
  id: '1',
  title: 'Sistema de Gestión Web',
  description: 'Aplicación para la administración de inventarios.',
  tags: ['Angular 19', 'TypeScript', 'Tailwind CSS'],
  imageUrl: 'https://via.placeholder.com/300',
  githubUrl: 'https://github.com/usuario/proyecto',
  featured: false
};


describe('PorjectCardComponent', () => {
  let component: PorjectCardComponent;
  let fixture: ComponentFixture<PorjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorjectCardComponent);
    component = fixture.componentInstance;

    // Asignación del input requerido antes del primer detectChanges()
    fixture.componentRef.setInput('project', MOCK_PROJECT);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe renderizar el título del proyecto en la plantilla', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.project-title') || compiled.querySelector('h3');
    
    expect(titleElement?.textContent).toContain(MOCK_PROJECT.title);
  });
});
