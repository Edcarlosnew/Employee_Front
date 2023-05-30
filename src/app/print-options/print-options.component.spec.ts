import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOptionsComponent } from './print-options.component';

describe('PrintOptionsComponent', () => {
  let component: PrintOptionsComponent;
  let fixture: ComponentFixture<PrintOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
