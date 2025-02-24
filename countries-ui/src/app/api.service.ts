import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  countries = [];
  public getCountries(){
    this.httpClient.get('/countries')
                    .map((res: Response) => res.json())
                    .subscribe(
                        (data) => {
                          this.countries = data.countries;
                        },
                        error => {
                        });
    return this.countries;
  }

  public getCountryByName(name: string) {
    return this.httpClient.get(`/countries/${name}`);
  }

}