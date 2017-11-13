import { TestBed, inject } from '@angular/core/testing';

import { EmployeeEditService } from './employee-edit.service';

describe('EmployeeEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeEditService]
    });
  });

  it('should be created', inject([EmployeeEditService], (service: EmployeeEditService) => {
    expect(service).toBeTruthy();
  }));
});
