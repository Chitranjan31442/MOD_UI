import { TestBed, async, inject } from '@angular/core/testing';

import { Gaurd1Guard } from './gaurd1.guard';

describe('Gaurd1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gaurd1Guard]
    });
  });

  it('should ...', inject([Gaurd1Guard], (guard: Gaurd1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
