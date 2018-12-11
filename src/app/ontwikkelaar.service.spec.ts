import { TestBed } from '@angular/core/testing';

import { OntwikkelaarService } from './ontwikkelaar.service';

describe('OntwikkelaarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OntwikkelaarService = TestBed.get(OntwikkelaarService);
    expect(service).toBeTruthy();
  });
});
