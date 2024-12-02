import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAccessDeniedPageComponent } from './error-access-denied-page.component';

describe('ErrorAccessDeniedPageComponent', () => {
  let component: ErrorAccessDeniedPageComponent;
  let fixture: ComponentFixture<ErrorAccessDeniedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAccessDeniedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorAccessDeniedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
