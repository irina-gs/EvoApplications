import { TestBed } from '@angular/core/testing';

import { NotificationFooterService } from './notification-footer.service';

describe('NotificationFooterService', () => {
  let service: NotificationFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
