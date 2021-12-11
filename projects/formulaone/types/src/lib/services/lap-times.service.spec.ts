import { TestBed } from '@angular/core/testing';

import { LapTimesService } from './lap-times.service';

describe('LapTimesService', () => {
  let service: LapTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LapTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
