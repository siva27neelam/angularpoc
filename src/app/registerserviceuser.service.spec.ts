import { TestBed } from '@angular/core/testing';

import { RegisterserviceuserService } from './registerserviceuser.service';

describe('RegisterserviceuserService', () => {
  let service: RegisterserviceuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterserviceuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
