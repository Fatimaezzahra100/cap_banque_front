import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../category/category';
@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  lastMessageData: string[] = [];
  loading: boolean = false;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
  }



}
