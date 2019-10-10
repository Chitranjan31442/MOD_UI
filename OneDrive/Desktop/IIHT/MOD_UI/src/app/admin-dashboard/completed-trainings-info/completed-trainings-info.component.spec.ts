import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTrainingsInfoComponent } from './completed-trainings-info.component';

describe('CompletedTrainingsInfoComponent', () => {
  let component: CompletedTrainingsInfoComponent;
  let fixture: ComponentFixture<CompletedTrainingsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTrainingsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTrainingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
