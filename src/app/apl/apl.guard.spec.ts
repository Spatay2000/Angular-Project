import { TestBed } from '@angular/core/testing';

import { AplGuard } from './apl.guard';

describe('AplGuard', () => {
  let guard: AplGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AplGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
