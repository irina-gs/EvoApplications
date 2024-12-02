import { TestBed } from '@angular/core/testing';

import { AccessAdminRoleGuard } from './access-admin-role.guard';

describe('AccessAdminRoleGuard', () => {
  let guard: AccessAdminRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessAdminRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
