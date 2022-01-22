import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { TopicService } from '../../service/topic.service';
import { Category } from '../category/category';
import { Topic } from '../topic/topic';
import { userList } from '../../service/user-provider';
@Component({
  selector: 'topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {
  category!: Category;
  showTopicForm: boolean = false;
  topic!: Topic;

  constructor(private router: ActivatedRoute, private categoryService: CategoryService, private topicService: TopicService) { }

  ngOnInit(): void {
    const categoryId = Number(this.router.snapshot.paramMap.get('id'));
    this.categoryService.getCategory(categoryId).subscribe(category => {
      this.category = category;
    });
  }

  toggleTopicForm(): void {
    this.showTopicForm = !this.showTopicForm;
  }

  postTopic(values: any): void {
    if (values.title !== null && values.content !== null) {
      const topic = {
        title: values.title,
        content: values.content,
        created_at: new Date(),
        updated_at: new Date(),
        user: 'api/users/1',
        category: 'api/categories/' + this.category.id
      }
      console.log(topic);
      this.topicService.postTopic(topic).subscribe((topic) => console.log(topic));
    }
  }
}
