import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../service/utils';
import { Comment } from './comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() subCommentEvent = new EventEmitter;
  displayingSubComments: boolean = false;
  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  showSubComments(): void {
    this.displayingSubComments = !this.displayingSubComments;
  }

  formatDate(date: string) {
    return this.utilsService.formatDate(date);
  }

  formatHour(date: string) {
    return this.utilsService.formatHour(date);
  }

  addSubComment(event: any) {
    this.comment.subcomments?.push(event);
  }

}
