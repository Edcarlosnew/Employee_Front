import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterEmployeeComponent } from './add-register-employee.component';

describe('AddRegisterEmployeeComponent', () => {
  let component: AddRegisterEmployeeComponent;
  let fixture: ComponentFixture<AddRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegisterEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
