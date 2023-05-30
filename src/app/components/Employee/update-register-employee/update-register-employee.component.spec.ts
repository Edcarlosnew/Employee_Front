import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegisterEmployeeComponent } from './update-register-employee.component';

describe('UpdateRegisterEmployeeComponent', () => {
  let component: UpdateRegisterEmployeeComponent;
  let fixture: ComponentFixture<UpdateRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegisterEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
