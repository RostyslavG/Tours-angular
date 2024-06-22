import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})

export class ApiService {
  constructor(private http: HttpClient) { }

  //private apiUrl = 'https://catfact.ninja/fact';

  private baseUrl = "https://api.openweathermap.org/data/2.5";
  private apiKey = "dea30c6b740706fb542b931d5e2df7c9";

  // public getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  public getCurrentWeather(cityName: string): Observable<any> {
    let url = `${this.baseUrl}/weather?q=${cityName}&appid=${this.apiKey}&lang=ua&units=metric`;
    return this.http.get<any>(url);
  }

  public getFiveDayForecast(cityName: string): Observable<any> {
    let url = `${this.baseUrl}/forecast?q=${cityName}&appid=${this.apiKey}&lang=ua&units=metric`;
    return this.http.get<any>(url);
  }
}