import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../../service/topic.service';
import { Topic } from '../topic/topic';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic!: Topic;
  constructor(private router: ActivatedRoute, private topicService: TopicService) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.topicService.getTopic(id).subscribe(topic => this.topic = topic);
  }

}
