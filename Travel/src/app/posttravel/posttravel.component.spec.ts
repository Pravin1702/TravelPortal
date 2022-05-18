import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttravelComponent } from './posttravel.component';

describe('PosttravelComponent', () => {
  let component: PosttravelComponent;
  let fixture: ComponentFixture<PosttravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosttravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
