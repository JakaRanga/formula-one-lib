import { TestBed } from '@angular/core/testing';

import { PitStopsService } from './pit-stops.service';

describe('PitStopsService', () => {
  let service: PitStopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitStopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
