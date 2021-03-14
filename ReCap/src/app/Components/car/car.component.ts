import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/models/car';
import { carResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  

  cars:Car[] = [];
  dataLoaded =false;
 

  constructor(private carServie:CarService) { }

  ngOnInit(): void {
    this.getCars();
    
  }
  getCars(){
    
   this.carServie.getCars().subscribe(response =>{
     this.cars = response.data
     this.dataLoaded=true;
     
   })
  

  }

}