import { TestBed } from '@angular/core/testing';

import { EnvironmentUrlServiceService } from './environment-url-service.service';

describe('EnvironmentUrlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentUrlServiceService = TestBed.get(EnvironmentUrlServiceService);
    expect(service).toBeTruthy();
  });
});
