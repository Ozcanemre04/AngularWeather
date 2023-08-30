import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weather } from '../interfaces/Iweather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  
  getWeather(country:string):Observable<weather>{
    return this.http.get<weather>(`http://api.weatherapi.com/v1/forecast.json?key=${environment?.ApiKey}&q=${country}&days=7&aqi=no&alerts=no`)
  }

  
}
