import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  searchSunRiseSet(lat: number, lng: number) {
    return this.httpClient
      .get(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=UTC&date=today`);
  }

  searchWeather(lat: number, lng: number) {
    return this.httpClient
      .get(`https://www.7timer.info/bin/astro.php?lon=${lng}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`);
  }

}   