import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDeleteRegisterComponent } from './del-delete-register.component';

describe('DelDeleteRegisterComponent', () => {
  let component: DelDeleteRegisterComponent;
  let fixture: ComponentFixture<DelDeleteRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelDeleteRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelDeleteRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
