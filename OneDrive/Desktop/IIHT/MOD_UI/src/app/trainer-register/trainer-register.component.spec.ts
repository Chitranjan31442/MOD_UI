import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRegisterComponent } from './trainer-register.component';

describe('TrainerRegisterComponent', () => {
  let component: TrainerRegisterComponent;
  let fixture: ComponentFixture<TrainerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
