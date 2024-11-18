import { TestBed } from '@angular/core/testing';

import { AddIdInterceptor } from './add-id.interceptor';

describe('AddIdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddIdInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddIdInterceptor = TestBed.inject(AddIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
