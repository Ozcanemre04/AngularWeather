import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachHourComponent } from './each-hour.component';

describe('EachHourComponent', () => {
  let component: EachHourComponent;
  let fixture: ComponentFixture<EachHourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EachHourComponent]
    });
    fixture = TestBed.createComponent(EachHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
