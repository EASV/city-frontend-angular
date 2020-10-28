import { Injectable } from '@angular/core';
import {City} from './city.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  create(city: City): Observable<City> {
    return this.httpClient
      .post<City>(environment.backendApiUrl + 'cities', city);
  }
}
