import { TestBed } from '@angular/core/testing';

import { AccessUserRoleGuard } from './access-user-role.guard';

describe('AccessUserRoleGuard', () => {
  let guard: AccessUserRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessUserRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
