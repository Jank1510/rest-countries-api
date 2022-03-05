import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  linkApi:string='https://restcountries.com/v2/all'

  constructor(private http: HttpClient) { }

  
  GetRegions(){
    let direccion= this.linkApi
    return this.http.get(direccion)
  }

}
