import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Api/api.service';

type JsonIn = {
  lat: number,
  lng: number,
};

type Weather = {
  time: number,
  temperature: number,
  cloudy: number,
}[];

type SunRiseSet = {
  sunrise: string,
  sunset: string
};

@Component({
  selector: 'app-detail',
  templateUrl: './DetailPage.component.html',
})

export class DetailPageComponent {
  jsonIn: JsonIn = {
    lat: 0,
    lng: 0,
  }
  weather: Weather = []
  
  sunRiseSet: SunRiseSet = {
    sunrise: '',
    sunset: '',
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.jsonIn.lat = params.get('lat');
      this.jsonIn.lng = params.get('lng');
    });

    this.apiService.searchSunRiseSet(this.jsonIn.lat, this.jsonIn.lng)
      .subscribe((response: any) => {
        this.sunRiseSet.sunrise = response.results.sunrise;
        this.sunRiseSet.sunset = response.results.sunset;
      });

    this.apiService.searchWeather(this.jsonIn.lat, this.jsonIn.lng)
      .subscribe((response: any) => {      
        response.dataseries.forEach((item: any) => {
          this.weather.push({
            time: item.timepoint,
            temperature: item.temp2m,
            cloudy: item.cloudcover,
          })
        })
      });
  }

}
