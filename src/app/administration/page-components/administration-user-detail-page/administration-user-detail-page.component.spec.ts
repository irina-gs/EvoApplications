import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUserDetailPageComponent } from './administration-user-detail-page.component';

describe('AdministrationUserDetailPageComponent', () => {
  let component: AdministrationUserDetailPageComponent;
  let fixture: ComponentFixture<AdministrationUserDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationUserDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationUserDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
