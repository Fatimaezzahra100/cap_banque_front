import { Component, Input, OnInit } from '@angular/core';
import { SubComment } from './sub-comment';

@Component({
  selector: 'sub-comment',
  templateUrl: './sub-comment.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './sub-comment.component.css']
})
export class SubCommentComponent implements OnInit {
  @Input() subcomment!: SubComment;

  constructor() { }

  ngOnInit(): void {
  }

}
