import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPerHourComponent } from './weather-hourly.component';

describe('WeatherPerHourComponent', () => {
  let component: WeatherPerHourComponent;
  let fixture: ComponentFixture<WeatherPerHourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherPerHourComponent]
    });
    fixture = TestBed.createComponent(WeatherPerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
