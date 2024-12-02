import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationRecipesManagementComponent } from './administration-recipes-management.component';

describe('AdministrationRecipesManagementComponent', () => {
  let component: AdministrationRecipesManagementComponent;
  let fixture: ComponentFixture<AdministrationRecipesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationRecipesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationRecipesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
