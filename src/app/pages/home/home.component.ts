import { Component, ElementRef, Renderer2 } from '@angular/core';
import { weather } from 'src/app/interfaces/Iweather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private weather:WeatherService,private renderer:Renderer2){
  }

   country!:string;
   gotweather!:weather;
   errorMessage!:string;
   fahrenheit:boolean = false;
   
   
   onChange(value:string){
     this.country = value;
     this.fetchData();
     this.renderer.setStyle(document.body,'background',"url('https://source.unsplash.com/1920x800/?" + this.country + "')")
  }
  convertFahrenheit(value:boolean){
    this.fahrenheit = value;
  }
  
  fetchData(){
    if(this.country !== undefined){
      this.weather.getWeather(this.country).subscribe({
        next:(post)=>{this.gotweather =post; 
          console.log(this.gotweather);
        },
  
        error:(err)=> {
            this.errorMessage=err;
        },
      });
    }

  }
}
