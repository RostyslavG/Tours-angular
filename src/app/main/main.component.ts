import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.servise';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  //data:any;

  weatherData: any;
  fiveDayForecast: any;

  ngOnInit() {
    // this.apiService.getData().subscribe(
    //   data => {
    //     this.data=data;
    //   },
    //   error => {}
    // );

    this.searchWeather('Ternopil');
  }

  searchWeather(cityName: string) {
    this.apiService.getCurrentWeather(cityName).subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        console.log(error);
      }
    );

    this.apiService.getFiveDayForecast(cityName).subscribe(
      data => {
        this.fiveDayForecast = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
