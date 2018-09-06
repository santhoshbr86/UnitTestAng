import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateSearchOrderDetailService } from './can-deactivate-search-order-detail.service';

describe('CanDeactivateSearchOrderDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateSearchOrderDetailService]
    });
  });

  it('should be created', inject([CanDeactivateSearchOrderDetailService], (service: CanDeactivateSearchOrderDetailService) => {
    expect(service).toBeTruthy();
  }));
});
