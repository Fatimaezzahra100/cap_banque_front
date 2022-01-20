import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TopicService } from '../../service/topic.service';
import { Topic } from '../topic/topic';
import { UtilsService } from '../../service/utils';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  @Output() topic!: Topic;
  constructor(private router: ActivatedRoute, private topicService: TopicService, private location: Location, public utilsService: UtilsService) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.topicService.getTopic(id).subscribe(topic => {
      this.topic = topic;
    });
  }

  goBack(): void {
    this.location.back();
  }

  formatDate(date: string) {
    return this.utilsService.formatDate(date);
  }

  formatHour(date: string) {
    return this.utilsService.formatHour(date);
  }

  addComment(event: any) {
    this.topic.comments.push(event);
  }

}
