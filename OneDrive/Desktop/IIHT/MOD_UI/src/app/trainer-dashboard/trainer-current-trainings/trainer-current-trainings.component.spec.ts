import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCurrentTrainingsComponent } from './trainer-current-trainings.component';

describe('TrainerCurrentTrainingsComponent', () => {
  let component: TrainerCurrentTrainingsComponent;
  let fixture: ComponentFixture<TrainerCurrentTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerCurrentTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCurrentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
