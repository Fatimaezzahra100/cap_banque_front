import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { userList } from '../../service/user-provider';

@Component({
  selector: 'comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() topicId!:number;
  content!:string;
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }

  addComment(topicId:number,values:any):void{
    console.log('ok');
    const comment = {
      id:2,
      content:values.content,
      created_at: new Date(),
      updated_at:new Date(),
      user:userList[0]
    }
    this.commentService.addComment(topicId, comment).subscribe(()=>this.content = '');
  } 
}
