import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../service/utils';
import { SubComment } from './sub-comment';

@Component({
  selector: 'sub-comment',
  templateUrl: './sub-comment.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './sub-comment.component.css']
})
export class SubCommentComponent implements OnInit {
  @Input() subcomment!: SubComment;

  constructor(public utilsService:UtilsService) { }

  ngOnInit(): void {
  }

  formatDate(date: string) {
    return this.utilsService.formatDate(date);
  }

  formatHour(date: string) {
    return this.utilsService.formatHour(date);
  }
}
