import { TestBed } from '@angular/core/testing';

import { AccessRoleGuard } from './access-role.guard';

describe('AccessRoleGuard', () => {
  let guard: AccessRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
