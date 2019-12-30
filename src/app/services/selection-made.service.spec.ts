import { TestBed } from '@angular/core/testing';

import { SelectionMadeService } from './selection-made.service';

describe('SelectionMadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionMadeService = TestBed.get(SelectionMadeService);
    expect(service).toBeTruthy();
  });
});
