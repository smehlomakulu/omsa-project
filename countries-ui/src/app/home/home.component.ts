import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountries().subscribe((data: any)=>{
			console.log(data);  
			this.countries = data;
		});
  }

}
