

/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-bwm220i-coupe',
  
  templateUrl: './bwm220i-coupe.component.html',
  styleUrls: ['./bwm220i-coupe.component.css'],
  standalone:true
})
export class Bwm220iCoupeComponent implements OnInit {
  carDetails: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/cars.json').subscribe(data => {
      this.carDetails = data;
    });
  }
}*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bwm220i-coupe',
  templateUrl: './bwm220i-coupe.component.html',
  styleUrls: ['./bwm220i-coupe.component.css'],
})
export class Bwm220iCoupeComponent implements OnInit {
  carDetails: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/cars.json').subscribe(data => {
      this.carDetails = data;
    });
  }
}


