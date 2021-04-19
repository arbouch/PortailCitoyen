import { TestBed } from '@angular/core/testing';

import { UpdatecitoyenService } from './updatecitoyen.service';

describe('UpdatecitoyenService', () => {
  let service: UpdatecitoyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecitoyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
