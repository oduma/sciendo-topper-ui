import { TestBed } from '@angular/core/testing';

import { GraphDataProviderService } from './graph-data-provider.service';

describe('GraphDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphDataProviderService = TestBed.get(GraphDataProviderService);
    expect(service).toBeTruthy();
  });
});
