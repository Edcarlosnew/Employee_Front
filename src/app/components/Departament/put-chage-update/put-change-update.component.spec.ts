import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutChageUpdateComponent } from './put-change-update.component';

describe('PutChageUpdateComponent', () => {
  let component: PutChageUpdateComponent;
  let fixture: ComponentFixture<PutChageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutChageUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutChageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
