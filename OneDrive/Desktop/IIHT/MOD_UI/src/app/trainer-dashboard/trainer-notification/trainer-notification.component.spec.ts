import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerNotificationComponent } from './trainer-notification.component';

describe('TrainerNotificationComponent', () => {
  let component: TrainerNotificationComponent;
  let fixture: ComponentFixture<TrainerNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
