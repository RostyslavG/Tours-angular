import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.servise';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  //data:any;

  weatherData: any;
  fiveDayForecast: any;
  ngOnInit(): void {
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
