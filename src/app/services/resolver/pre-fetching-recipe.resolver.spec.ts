import { TestBed } from '@angular/core/testing';

import { PreFetchingRecipeResolver } from './pre-fetching-recipe.resolver';

describe('PreFetchingRecipeResolver', () => {
  let resolver: PreFetchingRecipeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PreFetchingRecipeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
