import { Component, OnInit, Input } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category!: Category
  constructor() { }

  ngOnInit(): void {
  }

}
