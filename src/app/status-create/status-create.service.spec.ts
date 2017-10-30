import { TestBed, inject } from '@angular/core/testing';

import { StatusCreateService } from './status-create.service';

describe('StatusCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusCreateService]
    });
  });

  it('should be created', inject([StatusCreateService], (service: StatusCreateService) => {
    expect(service).toBeTruthy();
  }));
});
