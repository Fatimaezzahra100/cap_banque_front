import { Component, OnInit,Input } from '@angular/core';
import { Topic } from './topic';
@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!:Topic;

  constructor() { }

  ngOnInit(): void {
  }

}
