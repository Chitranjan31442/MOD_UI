import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingsComponent } from './current-trainings.component';

describe('CurrentTrainingsComponent', () => {
  let component: CurrentTrainingsComponent;
  let fixture: ComponentFixture<CurrentTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
