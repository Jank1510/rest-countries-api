import { TestBed } from '@angular/core/testing';

import { ServiceApiService } from './serviceApi.service';

describe('ServiceApiService', () => {
  let service: ServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
