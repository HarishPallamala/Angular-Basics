import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceCode {
  constructor(private http:HttpClient){
  }
  getTodos(){
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
    }
}
