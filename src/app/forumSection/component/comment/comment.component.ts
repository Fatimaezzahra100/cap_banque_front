import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!:Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
