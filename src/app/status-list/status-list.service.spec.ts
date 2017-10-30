import { TestBed, inject } from '@angular/core/testing';

import { StatusListService } from './status-list.service';

describe('StatusListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusListService]
    });
  });

  it('should be created', inject([StatusListService], (service: StatusListService) => {
    expect(service).toBeTruthy();
  }));
});
