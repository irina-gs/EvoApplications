import { TestBed } from '@angular/core/testing';

import { PreFetchingUserResolver } from './pre-fetching-user.resolver';

describe('PreFetchingUserResolver', () => {
  let resolver: PreFetchingUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PreFetchingUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
