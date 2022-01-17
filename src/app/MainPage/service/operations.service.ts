import { Injectable, EventEmitter } from "@angular/core";
import { Operation } from "./operation.model";
import { Compte } from "./compte.model";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private apiServerUrl = environment.apiBaseUrl;
  private currentUserId = 1;    // recuperer le userId de authentication.service !

  constructor(private http:HttpClient){};

  getOperations(): Observable<Operation[]> {
   return this.http.get<Operation[]>(`${this.apiServerUrl}/banking/users/${this.currentUserId}/ops`);
    
  }


  searchOperations(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: Operation[] = [];
    
    this.getOperations().subscribe((response) => 
      {
          var matchingFrequences = response.filter(
            (operation) => operation.frequence.toString().toLowerCase().indexOf(term) > -1 
            
          );
          /*
          var matchingDates = response.filter(
            (operation) => operation.operationDate.toString().toLowerCase().indexOf(term) > -1 
            
          );
          var matchingAmount = response.filter(
            (operation) => operation.amount.toString().toLowerCase().indexOf(term) > -1 
            
          );
          var matchingSender = response.filter(
            (operation) => (operation.compteReceiver != null) ? operation.compteSender.compteId.toString().toLowerCase().indexOf(term) > -1 : null
            
          );

          
          var matchingReceiverIn= response.filter(
            (operation) => (operation.compteReceiver != undefined) ? operation.compteReceiver.compteId.toString().toLowerCase().indexOf(term) > -1 : null
            
          );

          var matchingReceiverEx= response.filter(
            (operation) => (operation.ribReceiver != undefined) ?  operation.ribReceiver?.user.userName.toString().toLowerCase().indexOf(term) > -1 : null
            
          );

          var matchingId = response.filter(
            (operation) => operation.operationId.toString().toLowerCase().indexOf(term) > -1 
            
          );*/

          results = results.concat(matchingFrequences);
        
      }
    );
    

    var emitter = new EventEmitter(true); //we want searchSession() to return an observable
    setTimeout(() => {
      // we want to simulate a delay of http request responding
      emitter.emit(results);
    }, 100);
    return emitter;
  }

  /*
  saveEvent(event : IEvent) :Observable<IEvent> {
      return this.http.post<IEvent>(`${this.apiServerUrl}/api/v1/events/add`, event);
      
  }

  updateEvent(event : IEvent): Observable<IEvent> {
     return this.http.put<IEvent>(`${this.apiServerUrl}/api/v1/events/update`, event);
  }

  getEvent(id: String): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.apiServerUrl}/api/v1/events/find/${id}`);
   
  }

  deleteEvent(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/events/delete/${id.toString()}`);
  }

 */
}
