import { TestBed, async, inject } from '@angular/core/testing';

import { Gaurd4Guard } from './gaurd4.guard';

describe('Gaurd4Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gaurd4Guard]
    });
  });

  it('should ...', inject([Gaurd4Guard], (guard: Gaurd4Guard) => {
    expect(guard).toBeTruthy();
  }));
});
