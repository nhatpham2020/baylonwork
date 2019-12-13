import { TestBed, inject } from '@angular/core/testing';

import { GuneditService } from './gunedit.service';

describe('GuneditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuneditService]
    });
  });

  it('should be created', inject([GuneditService], (service: GuneditService) => {
    expect(service).toBeTruthy();
  }));
});
