import { TestBed } from '@angular/core/testing';

import { ArtistInfoService } from './artist-info.service';

describe('ArtistInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistInfoService = TestBed.get(ArtistInfoService);
    expect(service).toBeTruthy();
  });
});
