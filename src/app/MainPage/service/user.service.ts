import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;
     
  constructor(private http : HttpClient ) { }

  saveUser(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/banking/users/save`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/banking/users/all`); 
   }


}
