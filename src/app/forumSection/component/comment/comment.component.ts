import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  displayingSubComments: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSubComments(): void {
    this.displayingSubComments = !this.displayingSubComments;
  }

}
