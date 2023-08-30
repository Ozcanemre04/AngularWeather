import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Forecastday, weather } from 'src/app/interfaces/Iweather';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.scss']
})
export class WeatherHourlyComponent implements OnInit {

 constructor(private weatherservice:WeatherService,private route:ActivatedRoute,private renderer:Renderer2,private title:Title){
}

countryName!:string;
date!:string;
Weather:Forecastday|undefined;
errorMessage:string ='';


ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.countryName =params['name']
    this.date =params['day']
  })
    this.title.setTitle("hourly forecast of " + this.countryName)
    this.fetchData();
    this.renderer.setStyle(document.body,'background',"url('https://source.unsplash.com/1920x800/?" + this.countryName + "')");
  }
  
 
  fetchData(){
    if(this.countryName !== undefined){
      this.weatherservice.getWeather(this.countryName).subscribe({
        next:(post)=>{this.Weather =post.forecast.forecastday.find(x=>x.date == this.date);
          console.log(this.Weather);
          
        },
        error:(err)=> {
            this.errorMessage=err;
        },
      });
    }

  }
 
}
