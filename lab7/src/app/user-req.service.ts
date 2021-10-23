import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserReqService {

  constructor(private http: HttpClient) { 
    
  }
  getUsersList() {
    return this.http.get(`${environment.url}/users`, {
      params: {
        limit: '5',
      },
    });
  }

  getSingleUser(userId:any) {
    return this.http.get(`https://fakestoreapi.com/users/${userId}`);
  }

  // body : {
  // username : "Marina",
  // email : marina@gmail.com,
  // password : *******
  // }
  setUserList(body:any) {
    return this.http.post('https://fakestoreapi.com/users', body);
  }
}
