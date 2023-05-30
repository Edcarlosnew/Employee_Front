import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRecordsComponent } from './get-all-records.component';

describe('GetAllRecordsComponent', () => {
  let component: GetAllRecordsComponent;
  let fixture: ComponentFixture<GetAllRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
