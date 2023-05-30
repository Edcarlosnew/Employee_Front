import { TestBed } from '@angular/core/testing';

import { DepartamentApiService } from './departament-api.service';

describe('DepartamentApiService', () => {
  let service: DepartamentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
