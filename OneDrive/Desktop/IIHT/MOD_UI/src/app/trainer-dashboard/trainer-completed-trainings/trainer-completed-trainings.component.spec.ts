import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCompletedTrainingsComponent } from './trainer-completed-trainings.component';

describe('TrainerCompletedTrainingsComponent', () => {
  let component: TrainerCompletedTrainingsComponent;
  let fixture: ComponentFixture<TrainerCompletedTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerCompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
