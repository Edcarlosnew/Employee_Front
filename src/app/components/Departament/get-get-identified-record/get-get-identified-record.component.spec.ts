import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGetIdentifiedRecordComponent } from './get-get-identified-record.component';

describe('GetGetIdentifiedRecordComponent', () => {
  let component: GetGetIdentifiedRecordComponent;
  let fixture: ComponentFixture<GetGetIdentifiedRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGetIdentifiedRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGetIdentifiedRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
