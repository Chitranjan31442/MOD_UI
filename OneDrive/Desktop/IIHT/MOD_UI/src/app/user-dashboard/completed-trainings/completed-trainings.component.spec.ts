import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTrainingsComponent } from './completed-trainings.component';

describe('CompletedTrainingsComponent', () => {
  let component: CompletedTrainingsComponent;
  let fixture: ComponentFixture<CompletedTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
