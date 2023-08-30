import { Component, Input } from '@angular/core';
import {  weather } from 'src/app/interfaces/Iweather';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.scss']
})
export class WeatherDailyComponent {
  @Input()
  Weather!:weather;

  @Input()
  fahrenheit:boolean=false;
}
