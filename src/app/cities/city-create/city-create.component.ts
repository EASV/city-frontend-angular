import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {City} from '../shared/city.model';
import {CityService} from '../shared/city.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss']
})
export class CityCreateComponent implements OnInit {

  err: string;
  name = new FormControl('');
  zipCode = new FormControl('');
  errorResponse: any;
  cityCreated: City;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
  }

  saveCity() {
    let valueName = this.name.value;
    let valueZipCode = +this.zipCode.value;
    let city: City = {name: valueName, zipCode: valueZipCode};
    this.cityService.create(city)
      .pipe(
        catchError(err => {
          this.errorResponse = err;
          this.err = err.error;
          return err;
        })
      )
      .subscribe(city => {
        this.err = null;
        this.errorResponse = null;
        this.cityCreated = city as City;
        this.name.reset();
        this.zipCode.reset();
      });
  }
}
