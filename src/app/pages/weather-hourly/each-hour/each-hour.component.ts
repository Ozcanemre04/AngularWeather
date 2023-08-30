import { Component, Input } from '@angular/core';
import { Hour } from 'src/app/interfaces/Iweather';

@Component({
  selector: 'app-each-hour',
  templateUrl: './each-hour.component.html',
  styleUrls: ['./each-hour.component.scss']
})
export class EachHourComponent {
@Input()
hourlyWeather!:Hour;
}
