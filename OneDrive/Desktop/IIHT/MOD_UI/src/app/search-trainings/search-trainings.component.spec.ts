import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { getSearchDataComponent } from './search-trainings.component';

describe('getSearchDataComponent', () => {
  let component: getSearchDataComponent;
  let fixture: ComponentFixture<getSearchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ getSearchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(getSearchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
