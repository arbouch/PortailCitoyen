import { TestBed } from '@angular/core/testing';

import { CitoyenDetailPapierService } from './citoyen-detail-papier.service';

describe('CitoyenDetailPapierService', () => {
  let service: CitoyenDetailPapierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitoyenDetailPapierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
