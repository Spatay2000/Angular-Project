import { TestBed } from '@angular/core/testing';

import { SeriaService } from './seria.service';

describe('SeriaService', () => {
  let service: SeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
