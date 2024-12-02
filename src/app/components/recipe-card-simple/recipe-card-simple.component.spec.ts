import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardSimpleComponent } from './recipe-card-simple.component';

describe('RecipeCardSimpleComponent', () => {
  let component: RecipeCardSimpleComponent;
  let fixture: ComponentFixture<RecipeCardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
