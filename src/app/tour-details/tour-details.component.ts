import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ActivatedRoute } from '@angular/router';
//import { TUR_LIST } from '../mock-tour-list';
import {ATTRIBUTES_HOTEL_LIST } from '../mock-attributes-hotel-list';


@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour = {
    id: 0, 
    id_hotel: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    created_at: '',
    updated_at: ''
  };

  attributesHotelList = ATTRIBUTES_HOTEL_LIST;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    //this.getTour();
  }

  // getTour(): void {
  //   let id = +this.route.snapshot.paramMap.get('id')!;
  //   this.tour = TUR_LIST.find(t => t.id === id) || this.tour;
  // }
}
