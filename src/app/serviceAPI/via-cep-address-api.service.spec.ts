import { TestBed } from '@angular/core/testing';

import { ViaCepAddressApiService } from './via-cep-address-api.service';

describe('ViaCepAddressApiService', () => {
  let service: ViaCepAddressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaCepAddressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
