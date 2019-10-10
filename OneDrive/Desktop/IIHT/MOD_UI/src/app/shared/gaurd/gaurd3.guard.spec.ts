import { TestBed, async, inject } from '@angular/core/testing';

import { Gaurd3Guard } from './gaurd3.guard';

describe('Gaurd3Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gaurd3Guard]
    });
  });

  it('should ...', inject([Gaurd3Guard], (guard: Gaurd3Guard) => {
    expect(guard).toBeTruthy();
  }));
});
