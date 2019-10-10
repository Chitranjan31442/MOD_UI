import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEditProfileComponent } from './trainer-edit-profile.component';

describe('TrainerEditProfileComponent', () => {
  let component: TrainerEditProfileComponent;
  let fixture: ComponentFixture<TrainerEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
