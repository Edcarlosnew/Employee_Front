import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegisterEmployeeComponent } from './all-register-employee.component';

describe('AllRegisterEmployeeComponent', () => {
  let component: AllRegisterEmployeeComponent;
  let fixture: ComponentFixture<AllRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRegisterEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
