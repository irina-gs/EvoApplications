import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationRegistrationFormComponent } from './authorization-registration-form.component';

describe('AuthorizationRegistrationFormComponent', () => {
  let component: AuthorizationRegistrationFormComponent;
  let fixture: ComponentFixture<AuthorizationRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
