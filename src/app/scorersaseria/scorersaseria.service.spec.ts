import { TestBed } from '@angular/core/testing';

import { ScorersaseriaService } from './scorersaseria.service';

describe('ScorersaseriaService', () => {
  let service: ScorersaseriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorersaseriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
