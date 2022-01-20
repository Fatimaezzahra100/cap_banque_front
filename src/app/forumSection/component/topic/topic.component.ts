import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../service/utils';
import { Topic } from './topic';
@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic;

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  formatDate(date: string) {
    return this.utilsService.formatDate(date);
  }

  formatHour(date: string) {
    return this.utilsService.formatHour(date);
  }
}
