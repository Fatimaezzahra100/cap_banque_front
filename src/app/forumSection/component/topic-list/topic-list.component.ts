import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/forumSection/service/topic.service';
import { Topic } from '../topic/topic';
@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: Topic[] = [];
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(topics=>this.topics = topics);
  }

}
