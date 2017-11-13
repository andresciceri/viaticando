import { TestBed, inject } from '@angular/core/testing';

import { CategoryEditService } from './category-edit.service';

describe('CategoryEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryEditService]
    });
  });

  it('should be created', inject([CategoryEditService], (service: CategoryEditService) => {
    expect(service).toBeTruthy();
  }));
});
