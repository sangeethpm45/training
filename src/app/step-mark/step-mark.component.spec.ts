import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMarkComponent } from './step-mark.component';

describe('StepMarkComponent', () => {
  let component: StepMarkComponent;
  let fixture: ComponentFixture<StepMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
