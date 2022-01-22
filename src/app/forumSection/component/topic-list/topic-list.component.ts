import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentFilter: string = '';
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.loading = true;
    this.topicService.getTopics().subscribe(topics => {
      this.topics = topics;
      this.loading = false;
    });
  }

  filterTopic(values: any): void {
    this.topicService.getTopics().subscribe(topics => {
      if (values.query) {
        this.topics = topics.filter(topic => topic.title.includes(values.query) || topic.content.includes(values.query));
      } else {
        this.topics = topics;
      }
    })
  }

}
