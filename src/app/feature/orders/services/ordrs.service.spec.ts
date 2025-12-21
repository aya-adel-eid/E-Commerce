import { TestBed } from '@angular/core/testing';

import { OrdrsService } from './ordrs.service';

describe('OrdrsService', () => {
  let service: OrdrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
