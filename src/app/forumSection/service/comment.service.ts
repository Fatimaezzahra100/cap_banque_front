import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../component/comment/comment';
import { Topic } from '../component/topic/topic';
import { TopicService } from './topic.service';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  topic!:Topic;
  constructor(private topicService: TopicService) { }

  addComment(topicId: number, comment: Comment): Observable<Comment> {
    this.topicService.getTopic(Number(topicId)).subscribe(topicElement =>this.topic = topicElement);
    if(this.topic !== undefined){
      this.topic.comments?.push(comment);
    }else{
      return of();
    }
    return of(comment);
  }
}
