import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../component/comment/comment';
import { Topic } from '../component/topic/topic';
import { TopicService } from './topic.service';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiurl: string = "http://localhost:8080/api/comments";
  topic!: Topic;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private topicService: TopicService, private http: HttpClient) { }

  addComment(comment: any): Observable<Comment> {

    return this.http.post<any>(this.apiurl,comment,this.httpOptions)
  }
}
