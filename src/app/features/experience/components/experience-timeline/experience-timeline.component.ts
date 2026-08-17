
import { Component, input, signal, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItem, ExperienceType } from '../../../../core/models/experience.model';

@Component({
  selector: 'app-experience-timeline',
  imports: [CommonModule],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.css',
  host: {
    class: 'block w-full',
  },
})
export class ExperienceTimelineComponent {
  // Input Signal requerida (Angular 19)
  readonly items = input.required<ExperienceItem[]>();

  // Evento de salida funcional
  readonly itemSelected = output<ExperienceItem>();

  // Estado de filtro local manejado con Signal
  readonly activeFilter = signal<ExperienceType | 'all'>('all');

  // Signal Computada: filtra la lista de experiencia dinámicamente
  readonly filteredItems = computed(() => {
    const filter = this.activeFilter();
    const allItems = this.items();

    if (filter === 'all') {
      return allItems;
    }
    return allItems.filter((item) => item.type === filter);
  });

  setFilter(filter: ExperienceType | 'all'): void {
    this.activeFilter.set(filter);
  }

  onSelect(item: ExperienceItem): void {
    this.itemSelected.emit(item);
  }
}