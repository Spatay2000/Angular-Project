import { TestBed } from '@angular/core/testing';

import { ScorersbundesService } from './scorersbundes.service';

describe('ScorersbundesService', () => {
  let service: ScorersbundesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorersbundesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
