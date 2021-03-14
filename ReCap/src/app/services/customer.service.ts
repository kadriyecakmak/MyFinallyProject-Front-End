import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


    apiUrl = "https://localhost:44325/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<customerResponseModel>{
    this.httpClient
   return this.httpClient.get<customerResponseModel>(this.apiUrl);

  
  }
}
