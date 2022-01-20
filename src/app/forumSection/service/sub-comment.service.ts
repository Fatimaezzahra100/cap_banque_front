import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SubComment } from '../component/sub-comment/sub-comment';
import { Comment } from '../component/comment/comment';
@Injectable({
  providedIn: 'root'
})
export class SubCommentService {
  private apiurl: string = "http://localhost:8080/api/subcomments";

  comment!: Comment;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addSubComment(subComment: any): Observable<Comment> {

    return this.http.post<any>(this.apiurl, subComment, this.httpOptions)
  }
}
