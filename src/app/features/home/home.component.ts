import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<h1>Inicio del Portafolio</h1>`
  //  templateUrl: './home.component.html',
  // styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('Portafolio Full Stack | Desarrollador Angular & Backend');
    
    this.metaService.updateTag({
      name: 'description',
      content: 'Portafolio profesional especializado en arquitecturas web escalables con Angular 19, TypeScript y microservicios.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Portafolio Full Stack | Angular 19'
    });
  }
}
