import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCommentService } from '../../service/sub-comment.service';
import { userList } from '../../service/user-provider';
@Component({
  selector: 'sub-comment-create',
  templateUrl: './subcomment-create.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './subcomment-create.component.css']
})
export class SubcommentCreateComponent implements OnInit {

  @Input() commentId!: number;
  content!: string;
  @Output() subCommentEvent = new EventEmitter();
  constructor(private subCommentService: SubCommentService) { }

  ngOnInit(): void {
  }

  addSubComment(commentId: number, values: any): void {
    const comment = {
      content: values.content,
      created_at: new Date(),
      updated_at: new Date(),
      comment: "/api/comments/" + commentId,
      user: "/api/users/" + userList[0].id
    }
    this.subCommentService.addSubComment(comment).subscribe(subComment => {
      this.subCommentEvent.emit(subComment);
      this.content = '';
    });
  }
}
