import { Injectable } from '@angular/core';
import { Topic } from '../component/topic/topic';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userList } from './user-provider';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl: string = "http://localhost:8080/api/topics";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<any>(this.apiUrl).pipe<Topic[]>(map(data => data['hydra:member']));
  }

  getTopic(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  postTopic(topic: object): Observable<Topic> {
    return this.http.post<Topic>(this.apiUrl, topic, this.httpOptions).pipe<Topic>(map(data => data));
  }
}
