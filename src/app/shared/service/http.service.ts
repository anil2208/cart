import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  private api = 'https://run.mocky.io/v3/';
  constructor(
    private http: HttpClient
    ) { }
    getCartData(id:any){
         return this.http.get(`${this.api}${id}`)
    }
}