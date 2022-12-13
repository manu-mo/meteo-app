import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './HomePage.component.html'
})

export class HomePageComponent implements OnInit {
    jsonIn = {
        lat: '',
        lng: '',
        turinLat: 45.070312,
        turinLng: 7.686856,
        nyLat: 40.7127837,
        nyLng: -74.0059413,
        sydneyLat: -33.855102,
        sydneyLng: 151.237471,
    }

    constructor() { }

    ngOnInit(): void { }

}