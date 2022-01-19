import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { TopicService } from '../../service/topic.service';
import { Topic } from '../topic/topic';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category!: Category
  
  //A supprimer quand t'as fais le lien avec l'api
  topics: Topic[] = [];
  
  
  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
    
    //A supprimer quand t'as fais le lien avec l'api
    private topicService: TopicService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    //A supprimer quand t'as fais le lien avec l'api
    this.topicService.getByCategory(id).subscribe(topics => this.topics = topics);
    
    
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

}
