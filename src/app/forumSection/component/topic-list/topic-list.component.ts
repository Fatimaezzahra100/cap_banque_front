import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/forumSection/service/topic.service';
import { UtilsService } from '../../service/utils';
import { Topic } from '../topic/topic';
@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: Topic[] = [];
  loading: boolean = false;
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.loading = true;
    this.topicService.getTopics().subscribe(topics => {
      this.topics = topics;
      this.loading = false;
    });
  }

}
