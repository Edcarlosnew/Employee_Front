import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddRegisterComponent } from './post-add-register.component';

describe('PostAddRegisterComponent', () => {
  let component: PostAddRegisterComponent;
  let fixture: ComponentFixture<PostAddRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAddRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
