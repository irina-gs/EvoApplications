import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEditRecipePageComponent } from './administration-edit-recipe-page.component';

describe('AdministrationEditRecipePageComponent', () => {
  let component: AdministrationEditRecipePageComponent;
  let fixture: ComponentFixture<AdministrationEditRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationEditRecipePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationEditRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
