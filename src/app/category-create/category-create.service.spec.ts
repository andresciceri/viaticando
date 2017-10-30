import { TestBed, inject } from '@angular/core/testing';

import { CategoryCreateService } from './category-create.service';

describe('CategoryCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryCreateService]
    });
  });

  it('should be created', inject([CategoryCreateService], (service: CategoryCreateService) => {
    expect(service).toBeTruthy();
  }));
});
