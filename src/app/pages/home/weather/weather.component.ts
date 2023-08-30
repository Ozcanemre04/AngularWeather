import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { weather } from 'src/app/interfaces/Iweather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
constructor(private title:Title){
  this.title.setTitle("Home")
}

@Input()
Weather!:weather;

fahrenheit:boolean = false;
@Output()
fahrenheitEvent:EventEmitter<boolean> = new EventEmitter();
convertFunction(){
  this.fahrenheit= !this.fahrenheit;
  this.fahrenheitEvent.emit(this.fahrenheit)
}
}
