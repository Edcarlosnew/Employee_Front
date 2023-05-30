import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRegisterEmployeeComponent } from './one-register-employee.component';

describe('OneRegisterEmployeeComponent', () => {
  let component: OneRegisterEmployeeComponent;
  let fixture: ComponentFixture<OneRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRegisterEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
