import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartComponent } from './show-depart.component';

describe('ShowDepartComponent', () => {
  let component: ShowDepartComponent;
  let fixture: ComponentFixture<ShowDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
