import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  saveUser(user: User):Observable<User>{
    let host = environment.apiBaseUrl;
    return this.http.post<User>(host+"/banking/users/save", user);
  }
}
