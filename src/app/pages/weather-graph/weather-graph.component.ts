import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { weather } from 'src/app/interfaces/Iweather';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.scss']
})
export class WeatherGraphComponent implements OnInit {
 constructor(private weatherserivce:WeatherService,private route:ActivatedRoute,private renderer:Renderer2,private title:Title){
}
weather!:weather;
chart:any;
countryName!:string;
errorMessage:string ="";

ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.countryName =params['name']
  })
  this.renderer.setStyle(document.body,'background','#E1F0FA')
  this.title.setTitle("Graph of "+ this.countryName);
  this.fetchData();
 }

 fetchData(){
  if(this.countryName !== undefined){
    this.weatherserivce.getWeather(this.countryName).subscribe({
      next:(post)=>{
        this.weather = post;
        const labels=this.weather.forecast.forecastday.map(item=>item.date)
        const MinValues= this.weather.forecast.forecastday.map(item=>item.day.mintemp_c)
        const MaxValues= this.weather.forecast.forecastday.map(item=>item.day.maxtemp_c)
        this.chart=new Chart('canvas',{
          type:'line',
          data:{
            labels:labels,
            datasets:[{
              label:"min temp in °C",
              backgroundColor:"blue",
              borderColor:"lightBlue",
              data:MinValues,
            },
          {
           label:"max temp in °C",
           backgroundColor:"crimson",
           borderColor:"red",
           data:MaxValues 
          }]
          },
          options:{
            responsive:true,
            
          }
        })
        
      },
      error:(err)=> {
          this.errorMessage=err;
      },
    });
  }

}

}
