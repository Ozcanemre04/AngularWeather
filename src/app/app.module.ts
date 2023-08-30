import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherGraphComponent } from './pages/weather-graph/weather-graph.component';
import { InputComponent } from './pages/home/input/input.component';
import { WeatherComponent } from './pages/home/weather/weather.component';
import { WeatherDailyComponent } from './pages/home/weather-daily/weather-daily.component';
import { EachHourComponent } from './pages/weather-hourly/each-hour/each-hour.component';
import { WeatherHourlyComponent } from './pages/weather-hourly/weather-hourly.component';
import { FahrenheitPipe } from './pipes/fahrenheit.pipe';
import { NgIconsModule } from '@ng-icons/core';
import  {matSearch}  from '@ng-icons/material-icons/baseline';
import  {matAir}  from '@ng-icons/material-icons/baseline';
import  {matWaterDrop}  from '@ng-icons/material-icons/baseline';
import  {matCompress}  from '@ng-icons/material-icons/baseline';
import  {matArrowUpward}  from '@ng-icons/material-icons/baseline';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherGraphComponent,
    WeatherHourlyComponent,
    InputComponent,
    WeatherComponent,
    WeatherDailyComponent,
    EachHourComponent,
    FahrenheitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({matSearch,matAir,matWaterDrop,matCompress,matArrowUpward}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
