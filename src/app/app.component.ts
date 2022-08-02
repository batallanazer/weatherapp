import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  weatherData? : WeatherData;
  cityName: string = 'Philippines';
  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }
  private getWeatherData(cityname:string){
    this.weatherService.getWeatherData(cityname)
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
      }
    });
  }
  
}
