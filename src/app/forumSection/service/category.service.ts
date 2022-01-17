import { Injectable } from '@angular/core';
import { Category } from '../component/category/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiurl:string = "http://localhost:8080/api/categories/";
  constructor(private http:HttpClient) { }

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

  getCategories(): Observable<any> {
  return this.http.get<any>(this.apiurl);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(this.apiurl + id );
  }
}
