import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedRecipesComponent } from './created-recipes.component';

describe('CreatedRecipesComponent', () => {
  let component: CreatedRecipesComponent;
  let fixture: ComponentFixture<CreatedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
