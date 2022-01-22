import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { UtilsService } from '../../service/utils';
import { Topic } from '../topic/topic';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category!: Category;
  query: string = '';
  topics: Topic[] | undefined = [];
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, public utilsService: UtilsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.categoryService.getCategory(id).subscribe(category => {
      this.category = category;
      console.log(this.category);
      this.topics = category.topic;
    }
    );

  }
  getLastMessageData(comments: any, data: string): any {
    const lastMessageData = comments[comments.length - 1];
    if (data === "user") {
      return lastMessageData.user.username;
    } else if (data === "created_at") {
      return this.formatDate(lastMessageData.created_at) + ' ' + this.formatHour(lastMessageData.created_at);
    }
  }

  formatDate(date: string) {
    return this.utilsService.formatDate(date);
  }

  formatHour(date: string) {
    return this.utilsService.formatHour(date);
  }

  filterTopics(values: any): void {
    this.categoryService.getCategory(this.category.id).subscribe(category => {
      if (values.query) {
        this.topics = category.topic?.filter(topic => topic.title.includes(values.query) || topic.content.includes(values.query));
      } else {
        this.topics = category.topic;
      }
    })
  }
}
