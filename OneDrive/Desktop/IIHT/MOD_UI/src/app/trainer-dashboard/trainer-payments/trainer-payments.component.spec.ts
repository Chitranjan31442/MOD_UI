import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPaymentsComponent } from './trainer-payments.component';

describe('TrainerPaymentsComponent', () => {
  let component: TrainerPaymentsComponent;
  let fixture: ComponentFixture<TrainerPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
