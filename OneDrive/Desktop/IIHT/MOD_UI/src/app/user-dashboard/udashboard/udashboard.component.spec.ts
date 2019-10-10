import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdashboardComponent } from './udashboard.component';

describe('UdashboardComponent', () => {
  let component: UdashboardComponent;
  let fixture: ComponentFixture<UdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
