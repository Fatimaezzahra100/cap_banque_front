import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { userList } from '../../service/user-provider';

@Component({
  selector: 'comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() topicId!: number;
  content!: string;

  @Output() commentEvent = new EventEmitter();
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  addComment(topicId: number, values: any): void {
    const comment = {
      content: values.content,
      created_at: new Date(),
      updated_at: new Date(),
      topic: "/api/topics/" + topicId,
      user: "/api/users/" + userList[0].id
    }
    this.commentService.addComment(comment).subscribe(comment => {
      this.content = '';
      this.commentEvent.emit(comment);
    });
  }
}
