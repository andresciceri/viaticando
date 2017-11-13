import { TestBed, inject } from '@angular/core/testing';

import { TravelEditService } from './travel-edit.service';

describe('TravelEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelEditService]
    });
  });

  it('should be created', inject([TravelEditService], (service: TravelEditService) => {
    expect(service).toBeTruthy();
  }));
});
