import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/tours';
  private orderUrl = 'http://127.0.0.1:8000/api/orders';  
  private baseUrl = 'http://127.0.0.1:8000/storage/';

  private countryUrl = 'http://127.0.0.1:8000/api/countrys';
  private cityUrl = 'http://127.0.0.1:8000/api/citys';
  private hotelUrl = 'http://127.0.0.1:8000/api/hotels';
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  fetchCountries(): Observable<any> {
    return this.http.get<any>(this.countryUrl);
  }

  fetchCities(): Observable<any> {
    return this.http.get<any>(this.cityUrl);
  }

  fetchHotels(): Observable<any> {
    return this.http.get<any>(this.hotelUrl);
  }

  // orderTour( tourId: number): Observable<any> {
  //   return this.http.post<any>(this.orderUrl, { tourId });
  // }

  orderTour(status: string, tourId: number): Observable<any> {
    return this.http.post<any>(this.orderUrl, { status, tour_id: tourId });
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}