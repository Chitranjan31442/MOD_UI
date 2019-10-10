import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingsInfoComponent } from './current-trainings-info.component';

describe('CurrentTrainingsInfoComponent', () => {
  let component: CurrentTrainingsInfoComponent;
  let fixture: ComponentFixture<CurrentTrainingsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainingsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
