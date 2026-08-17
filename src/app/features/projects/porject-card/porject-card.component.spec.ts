import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectCardComponent } from './porject-card.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
