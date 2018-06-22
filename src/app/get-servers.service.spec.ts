import { TestBed, inject } from '@angular/core/testing';

import { GetServersService } from './get-servers.service';

describe('GetServersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetServersService]
    });
  });

  it('should be created', inject([GetServersService], (service: GetServersService) => {
    expect(service).toBeTruthy();
  }));
});
