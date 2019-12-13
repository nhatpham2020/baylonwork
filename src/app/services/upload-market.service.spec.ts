import { TestBed, inject } from '@angular/core/testing';

import { UploadMarketService } from './upload-market.service';

describe('UploadMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadMarketService]
    });
  });

  it('should be created', inject([UploadMarketService], (service: UploadMarketService) => {
    expect(service).toBeTruthy();
  }));
});
