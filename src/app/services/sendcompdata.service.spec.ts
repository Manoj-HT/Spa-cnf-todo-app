import { TestBed } from '@angular/core/testing';

import { SendcompdataService } from './sendcompdata.service';

describe('SendcompdataService', () => {
  let service: SendcompdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendcompdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
