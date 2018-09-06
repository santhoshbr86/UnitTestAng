import { TestBed, inject } from '@angular/core/testing';

import { AlwaysAuthchildGaurdService } from './always-authchild-gaurd.service';

describe('AlwaysAuthchildGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthchildGaurdService]
    });
  });

  it('should be created', inject([AlwaysAuthchildGaurdService], (service: AlwaysAuthchildGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
