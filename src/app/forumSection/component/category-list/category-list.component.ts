import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../category/category';
@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  loading:boolean = false;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.categoryService.getCategories().subscribe(categories =>{
      this.categories = categories['hydra:member'];
      this.loading = false
    });
  }

}
