import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44325/api/cars/getall"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<carResponseModel>{
    this.httpClient
   return this.httpClient.get<carResponseModel>(this.apiUrl);

  }
}
