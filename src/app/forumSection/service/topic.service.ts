import { Injectable } from '@angular/core';
import { Topic } from '../component/topic/topic';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userList } from './user-provider';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl: string = "http://localhost:8080/api/topics/";

  

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<any>(this.apiUrl).pipe<Topic[]>(map(data => data['hydra:member']));
  }

  getTopic(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }

  getByCategory(id: number): Observable<Topic[]> {
    // let topics = this.TOPICS.filter(topics => topics.category.id === id);
    // return of(topics);
    return of();
  }

}
