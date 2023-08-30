import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherGraphComponent } from './pages/weather-graph/weather-graph.component';
import { WeatherHourlyComponent } from './pages/weather-hourly/weather-hourly.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Name/:name/day/:day',component:WeatherHourlyComponent},
  {path:'Name/:name/graph',component:WeatherGraphComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
