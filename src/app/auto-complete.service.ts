import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  url!: string;
  constructor(private http: HttpClient) { 
    this.url = 'https://restcountries.com/v3.1/name'
  }
  getSearchData(userInput:string) {
    return this.http.get<any>(`${this.url}/${userInput}`);
  }
}
