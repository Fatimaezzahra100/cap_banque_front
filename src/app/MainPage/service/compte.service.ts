import { Injectable, EventEmitter } from "@angular/core";
import { Operation } from "./operation.model";
import { Compte } from "./compte.model";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { CompteCourant } from "./compteCourant.model";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private apiServerUrl = environment.apiBaseUrl;
  private currentUserId = 1;    // recuperer le userId de authentication.service !

  constructor(private http:HttpClient){};

  getCompteCourant(): Observable<CompteCourant> {
   return this.http.get<CompteCourant>(`${this.apiServerUrl}/banking/users/${this.currentUserId}/cc`);
    
  }
}
