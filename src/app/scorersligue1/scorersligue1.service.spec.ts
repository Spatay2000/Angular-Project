import { TestBed } from '@angular/core/testing';

import { Scorersligue1Service } from './scorersligue1.service';

describe('Scorersligue1Service', () => {
  let service: Scorersligue1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scorersligue1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
