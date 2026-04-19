import { TestBed } from '@angular/core/testing';

import { ServiceCode } from './service-code';

describe('ServiceCode', () => {
  let service: ServiceCode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
