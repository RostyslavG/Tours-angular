import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Tour } from '../tour';
import {Country} from '../country';
import {City} from '../city';
import {Hotel} from '../hotel';


import { HOTEL_NUMBERS_LIST } from '../mock-hotel-number-list';
import { AVAILABILITY_HOTEL_LIST } from '../mock-availability-hotel-list';
import { ATTRIBUTES_HOTEL_LIST } from '../mock-attributes-hotel-list';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class ToursComponent implements OnInit {

  hotelNumbersList = HOTEL_NUMBERS_LIST;
  availabilityHotelList = AVAILABILITY_HOTEL_LIST;
  attributesHotelList = ATTRIBUTES_HOTEL_LIST;

  filteredTourList: Tour[] = [];
  countryList: Country[] = [];
  cityList: City[] = [];
  hotelList: Hotel[] = [];


  selectedCountry: number | null = null;
  selectedCity: number | null = null;
  selectedHotel: number | null = null;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchData().subscribe(
      (data: { tours: Tour[] }) => {
        const baseUrl = this.apiService.getBaseUrl();
        this.filteredTourList = data.tours.map(tour => ({
          ...tour,
          image: baseUrl + tour.image
        }));
      },
      error => {
        console.error('Error fetching data', error);
      }
    );

    this.apiService.fetchCountries().subscribe(
      (data: { countrys: Country[] }) => {
        this.countryList = data.countrys;
      },
      error => {
        console.error('Error fetching countries', error);
      }
    );

    this.apiService.fetchCities().subscribe(
      (data: { citys: City[] }) => {
        this.cityList = data.citys;
      },
      error => {
        console.error('Error fetching cities', error);
      }
    );

    this.apiService.fetchHotels().subscribe(
      (data: { hotels: Hotel[] }) => {
        this.hotelList = data.hotels;
      },
      error => {
        console.error('Error fetching hotels', error);
      }
    );
  }

  // orderTour(tourId: number) {
  //   this.apiService.orderTour(tourId).subscribe(
  //     response => {
  //       console.log('Order placed successfully', response);
  //     },
  //     error => {
  //       console.error('Error placing order', error);
  //     }
  //   );
  // }

  orderTour(tourId: number) {
    const status = 'активне';

    this.apiService.orderTour(status, tourId).subscribe(
      response => {
        console.log('Order placed successfully', response);
      },
      error => {
        console.error('Error placing order', error);
      }
    );
  }
}
