import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditingComponent } from './post-editing.component';

describe('PostEditingComponent', () => {
  let component: PostEditingComponent;
  let fixture: ComponentFixture<PostEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
