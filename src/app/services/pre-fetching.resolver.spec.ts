import { TestBed } from '@angular/core/testing';

import { PreFetchingResolver } from './pre-fetching.resolver';

describe('PreFetchingResolver', () => {
  let resolver: PreFetchingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PreFetchingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
