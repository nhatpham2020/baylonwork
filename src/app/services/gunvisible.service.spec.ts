import { TestBed, inject } from '@angular/core/testing';

import { GunvisibleService } from './gunvisible.service';

describe('GunvisibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GunvisibleService]
    });
  });

  it('should be created', inject([GunvisibleService], (service: GunvisibleService) => {
    expect(service).toBeTruthy();
  }));
});
