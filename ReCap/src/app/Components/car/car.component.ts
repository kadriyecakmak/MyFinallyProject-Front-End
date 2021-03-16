import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos:CarDto[] = [];
  constructor(private carServie: CarService) {}

  ngOnInit(): void {
    this.getCars();
    this.getCarDtoList();
  }
  getCars() {
    this.carServie.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDtoList(){
    this.carServie.getCarDtoList().subscribe((response)=>{
    this.cardtos=response.data;

    });
  }
}
