import { TestBed } from '@angular/core/testing';

import { ClubsGuard } from './clubs.guard';

describe('ClubsGuard', () => {
  let guard: ClubsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClubsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
