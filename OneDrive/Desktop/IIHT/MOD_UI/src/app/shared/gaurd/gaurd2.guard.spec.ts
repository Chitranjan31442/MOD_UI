import { TestBed, async, inject } from '@angular/core/testing';

import { Gaurd2Guard } from './gaurd2.guard';

describe('Gaurd2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gaurd2Guard]
    });
  });

  it('should ...', inject([Gaurd2Guard], (guard: Gaurd2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
