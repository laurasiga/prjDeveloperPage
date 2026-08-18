import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTimelineComponent } from './experience-timeline.component';

describe('ExperienceTimelineComponent', () => {
  let component: ExperienceTimelineComponent;
  let fixture: ComponentFixture<ExperienceTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceTimelineComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', []); // Set before detectChanges
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should create', () => {
  //   const fixture = TestBed.createComponent(ExperienceTimelineComponent);
  //   fixture.componentInstance.items = []; // Provide required input
  //   fixture.detectChanges();
  //   expect(fixture.componentInstance).toBeTruthy();
  // });

  it('should create', () => {
  //const fixture = TestBed.createComponent(ExperienceTimelineComponent);
  // fixture.componentRef.setInput('items', []); // Use setInput for input signals
  // fixture.detectChanges();
  expect(fixture.componentInstance).toBeTruthy();
});
});
