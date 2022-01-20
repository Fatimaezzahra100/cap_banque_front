import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiServerUrl = environment.apiBaseUrl;
  private currentUserId? : number = this.authService.loggedUserId ;

  constructor(private http: HttpClient, private authService : AuthentificationService) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/banking/users/${this.currentUserId}`);
  }

  editUser(user: User):Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/banking/users/update/`+this.currentUserId, user);
  }

}
