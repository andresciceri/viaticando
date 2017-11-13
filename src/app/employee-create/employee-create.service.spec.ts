import { TestBed, inject } from '@angular/core/testing';

import { EmployeeCreateService } from './employee-create.service';

describe('EmployeeCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeCreateService]
    });
  });

  it('should be created', inject([EmployeeCreateService], (service: EmployeeCreateService) => {
    expect(service).toBeTruthy();
  }));
});
