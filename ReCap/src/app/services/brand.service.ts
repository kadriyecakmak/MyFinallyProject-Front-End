import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44325/api/brands/getall"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<brandResponseModel>{
    this.httpClient
   return this.httpClient.get<brandResponseModel>(this.apiUrl);

  }
}