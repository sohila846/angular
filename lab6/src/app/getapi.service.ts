import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private http: HttpClient) { }
  getUsersList() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getSingleUser(userId:any) {
    return this.http.get(`https://fakestoreapi.com/products/${userId}`);
  }

}
