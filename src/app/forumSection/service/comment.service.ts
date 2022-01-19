import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../component/comment/comment';
import { Topic } from '../component/topic/topic';
import { TopicService } from './topic.service';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiurl: string = "http://localhost:8080/api/comments/";
  topic!: Topic;
  constructor(private topicService: TopicService, private http: HttpClient) { }

  addComment(topicId: number, comment: Comment): Observable<Comment> {

    this.topicService.getTopic(Number(topicId)).subscribe(topicElement => this.topic = topicElement);
    if (this.topic !== undefined) {
      this.topic.comments?.push(comment);

    } else {
      return of();
    }
    return of(comment);
  }
}
