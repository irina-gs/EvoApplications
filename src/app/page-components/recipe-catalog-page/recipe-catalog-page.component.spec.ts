import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCatalogPageComponent } from './recipe-catalog-page.component';

describe('RecipeCatalogPageComponent', () => {
  let component: RecipeCatalogPageComponent;
  let fixture: ComponentFixture<RecipeCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCatalogPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
