import { TestBed } from '@angular/core/testing';

import { PocMfNgLibService } from './poc-mf-ng-lib.service';

describe('PocMfNgLibService', () => {
  let service: PocMfNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocMfNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
