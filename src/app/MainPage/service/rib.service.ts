import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from './authentification.service';
import { Rib } from './rib.model';

@Injectable({
  providedIn: 'root'
})
export class RibService {
  private apiServerUrl = environment.apiBaseUrl;
  private currentUserId? : number = this.authService.loggedUserId ;

  constructor(private http:HttpClient, private authService :AuthentificationService){};

  getUserRib(): Observable<Rib> {
   return this.http.get<Rib>(`${this.apiServerUrl}/banking/users/${this.currentUserId}/rib`);
    
  }
}
