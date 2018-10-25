import { TestBed, inject } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';

describe('NewserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewserviceService]
    });
  });

  it('should be created', inject([NewserviceService], (service: NewserviceService) => {
    expect(service).toBeTruthy();
  }));
});
