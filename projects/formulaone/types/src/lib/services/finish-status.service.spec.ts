import { TestBed } from '@angular/core/testing';

import { FinishStatusService } from './finish-status.service';

describe('FinishStatusService', () => {
  let service: FinishStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
