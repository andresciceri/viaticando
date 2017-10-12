import { TestBed, inject } from '@angular/core/testing';

import { TravelListService } from './travel-list.service';

describe('TravelListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelListService]
    });
  });

  it('should be created', inject([TravelListService], (service: TravelListService) => {
    expect(service).toBeTruthy();
  }));
});
