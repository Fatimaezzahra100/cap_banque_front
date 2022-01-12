import { Injectable } from '@angular/core';
import { Topic } from '../component/topic/topic';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Observable<Topic[]> {

    return of(this.TOPICS);
  }

  TOPICS: Topic[] = [
    {
      id: 1,
      name: 'Article1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi. Maiores, deleniti nemo praesentium unde quam vero sed, sunt eveniet beatae commodi hic, harum itaque? Hic culpa nihil, recusandae fugiat harum quam ipsa dolor, iure provident molestias laudantium fugit iusto inventore aut nulla eligendi facilis ut! Debitis veniam quibusdam facere!',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 1,
        name: "category1"
      }

    },
    {
      id: 1,
      name: 'Article2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi. Maiores, deleniti nemo praesentium unde quam vero sed, sunt eveniet beatae commodi hic, harum itaque? Hic culpa nihil, recusandae fugiat harum quam ipsa dolor, iure provident molestias laudantium fugit iusto inventore aut nulla eligendi facilis ut! Debitis veniam quibusdam facere!',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },
    {
      id: 1,
      name: 'Article3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi. Maiores, deleniti nemo praesentium unde quam vero sed, sunt eveniet beatae commodi hic, harum itaque? Hic culpa nihil, recusandae fugiat harum quam ipsa dolor, iure provident molestias laudantium fugit iusto inventore aut nulla eligendi facilis ut! Debitis veniam quibusdam facere!',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },
    {
      id: 1,
      name: 'Article4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi. Maiores, deleniti nemo praesentium unde quam vero sed, sunt eveniet beatae commodi hic, harum itaque? Hic culpa nihil, recusandae fugiat harum quam ipsa dolor, iure provident molestias laudantium fugit iusto inventore aut nulla eligendi facilis ut! Debitis veniam quibusdam facere!',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 3,
        name: "category3"
      }

    },
    {
      id: 1,
      name: 'Article5',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi. Maiores, deleniti nemo praesentium unde quam vero sed, sunt eveniet beatae commodi hic, harum itaque? Hic culpa nihil, recusandae fugiat harum quam ipsa dolor, iure provident molestias laudantium fugit iusto inventore aut nulla eligendi facilis ut! Debitis veniam quibusdam facere!',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },


  ]
}
