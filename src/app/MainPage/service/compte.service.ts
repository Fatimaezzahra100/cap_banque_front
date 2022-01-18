import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../model/compte.model';


@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient : HttpClient) { }

  getAllCompteEpargne(): Observable<Compte[]>{
    let host = environment.host;
    return this.httpClient.get<Compte[]>(host+"/banking/comptes/all");
  }

}
