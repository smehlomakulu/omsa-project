import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: ['./about.component.scss']
})

export class CountryDetailsComponent implements OnInit {


  countryDetails = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.countryDetails = this.apiService.getCountryByName();
  }

}
