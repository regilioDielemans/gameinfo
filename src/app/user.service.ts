import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private userUrl = 'https://gameinfoapi.herokuapp.com/api/users'
  private loginUrl = 'https://gameinfoapi.herokuapp.com/api/login'



  login(user:User):User{
    this.http.post(this.loginUrl, user ,httpOptions)
    return user

  }

  CreateUser (user : User): Observable<any> {
    console.log('user service')    
    return this.http.post(this.userUrl, user ,httpOptions)
  }
}
