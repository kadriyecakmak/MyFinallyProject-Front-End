import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44325/api/rentals/getall"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<rentalResponseModel>{
    this.httpClient
   return this.httpClient.get<rentalResponseModel>(this.apiUrl);

  }
}
