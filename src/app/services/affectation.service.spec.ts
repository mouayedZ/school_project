import { TestBed } from '@angular/core/testing';

import { AffectationService } from './affectation.service';

describe('AffectationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffectationService = TestBed.get(AffectationService);
    expect(service).toBeTruthy();
  });
});
