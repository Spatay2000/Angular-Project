import { TestBed } from '@angular/core/testing';

import { ScorerslaligaService } from './scorerslaliga.service';

describe('ScorerslaligaService', () => {
  let service: ScorerslaligaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorerslaligaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
