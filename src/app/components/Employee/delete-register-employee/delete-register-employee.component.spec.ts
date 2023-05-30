import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegisterEmployeeComponent } from './delete-register-employee.component';

describe('DeleteRegisterEmployeeComponent', () => {
  let component: DeleteRegisterEmployeeComponent;
  let fixture: ComponentFixture<DeleteRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRegisterEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
