import { TestBed } from '@angular/core/testing';

import { ServerConfigProviderService } from './server-config-provider.service';

describe('ServerConfigProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerConfigProviderService = TestBed.get(ServerConfigProviderService);
    expect(service).toBeTruthy();
  });
});
