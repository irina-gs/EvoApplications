import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMainPageComponent } from './administration-main-page.component';

describe('AdministrationMainPageComponent', () => {
  let component: AdministrationMainPageComponent;
  let fixture: ComponentFixture<AdministrationMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
