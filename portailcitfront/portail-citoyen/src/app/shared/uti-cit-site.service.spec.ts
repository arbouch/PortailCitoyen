import { TestBed } from '@angular/core/testing';

import { UtiCitSiteService } from './uti-cit-site.service';

describe('UtiCitSiteService', () => {
  let service: UtiCitSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtiCitSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
