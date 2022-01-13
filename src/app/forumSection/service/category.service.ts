import { Injectable } from '@angular/core';
import { Category } from '../component/category/category';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  CATEGORY: Category[] = [
    {
      id: 1,
      name: "Categorie 1"
    },
    {
      id: 2,
      name: "Categorie 2"
    },
    {
      id: 3,
      name: "Categorie 3"
    },
    {
      id: 4,
      name: "Categorie 4"
    },
    {
      id: 5,
      name: "Categorie 5"
    },
    {
      id: 6,
      name: "Categorie 6"
    },
    {
      id: 7,
      name: "Categorie 7"
    },

  ]

  getCategories(): Observable<Category[]> {
    return of(this.CATEGORY);
  }

  getCategory(id: number): Observable<Category> {
    const category = this.CATEGORY.find(category => category.id === id);
    if (category === undefined) {
      return of();
    }
    return of(category);
  }
}
