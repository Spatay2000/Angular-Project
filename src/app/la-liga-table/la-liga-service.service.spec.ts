import { TestBed } from '@angular/core/testing';

import { LaLigaServiceService } from './la-liga-service.service';

describe('LaLigaServiceService', () => {
  let service: LaLigaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaLigaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
