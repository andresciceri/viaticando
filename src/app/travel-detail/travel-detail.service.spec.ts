import { TestBed, inject } from '@angular/core/testing';

import { TravelDetailService } from './travel-detail.service';

describe('TravelDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelDetailService]
    });
  });

  it('should be created', inject([TravelDetailService], (service: TravelDetailService) => {
    expect(service).toBeTruthy();
  }));
});
