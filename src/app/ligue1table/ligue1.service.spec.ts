import { TestBed } from '@angular/core/testing';

import { Ligue1Service } from './ligue1.service';

describe('Ligue1Service', () => {
  let service: Ligue1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ligue1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
