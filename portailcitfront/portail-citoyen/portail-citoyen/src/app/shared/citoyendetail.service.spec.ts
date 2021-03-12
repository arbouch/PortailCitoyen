import { TestBed } from '@angular/core/testing';

import { CitoyendetailService } from './citoyendetail.service';

describe('CitoyendetailService', () => {
  let service: CitoyendetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitoyendetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
