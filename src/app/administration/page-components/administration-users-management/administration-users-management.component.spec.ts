import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUsersManagementComponent } from './administration-users-management.component';

describe('AdministrationUsersManagementComponent', () => {
  let component: AdministrationUsersManagementComponent;
  let fixture: ComponentFixture<AdministrationUsersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationUsersManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationUsersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
