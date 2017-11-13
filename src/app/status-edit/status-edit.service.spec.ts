import { TestBed, inject } from '@angular/core/testing';

import { StatusEditService } from './status-edit.service';

describe('StatusEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusEditService]
    });
  });

  it('should be created', inject([StatusEditService], (service: StatusEditService) => {
    expect(service).toBeTruthy();
  }));
});
