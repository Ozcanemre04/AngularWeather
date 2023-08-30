import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphComponent } from './weather-graph.component';

describe('WeatherGraphComponent', () => {
  let component: WeatherGraphComponent;
  let fixture: ComponentFixture<WeatherGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherGraphComponent]
    });
    fixture = TestBed.createComponent(WeatherGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
