import { TestBed } from '@angular/core/testing';

import { RibService } from './rib.service';

describe('RibService', () => {
  let service: RibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
