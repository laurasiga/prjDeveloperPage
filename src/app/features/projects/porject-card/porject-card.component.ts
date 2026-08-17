import { Component, input, signal, computed, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project, ProjectInquiry } from '../../../core/models/project.model';

@Component({
  selector: 'app-porject-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './porject-card.component.html',
  styleUrl: './porject-card.component.css'
})
export class PorjectCardComponent {
 private fb = inject(FormBuilder);

  // Signals de Entrada (Angular 17.1+)
  readonly project = input.required<Project>();

  // Evento de salida hacia el componente padre
  readonly inquirySubmitted = output<{ projectId: string; inquiry: ProjectInquiry }>();

  // Signals de estado interno
  readonly isExpanded = signal<boolean>(false);
  readonly isLiked = signal<boolean>(false);
  readonly isSubmitting = signal<boolean>(false);
  readonly formSentSuccess = signal<boolean>(false);

  // Signal computada
  readonly techStackFormatted = computed(() => 
    this.project().tags.join(' • ')
  );

  // Formulario Reactivo
  readonly inquiryForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    interestType: ['question', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  toggleDetails(): void {
    this.isExpanded.update(current => !current);
  }

  toggleLike(): void {
    this.isLiked.update(current => !current);
  }

  onSubmitInquiry(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const inquiryData: ProjectInquiry = this.inquiryForm.value;

    // Simulación de envío asíncrono hacia la API / servicio
    setTimeout(() => {
      this.inquirySubmitted.emit({
        projectId: this.project().id,
        inquiry: inquiryData
      });

      this.isSubmitting.set(false);
      this.formSentSuccess.set(true);
      this.inquiryForm.reset({ interestType: 'question' });

      // Ocultar mensaje de éxito tras 4 segundos
      setTimeout(() => this.formSentSuccess.set(false), 4000);
    }, 800);
  }

  // Getter auxiliar para validaciones en la plantilla
  isFieldInvalid(fieldName: string): boolean {
    const field = this.inquiryForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
