import { Injectable } from '@angular/core';
import { Topic } from '../forum/topic/topic';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics():Observable<Topic[]>{

    return of(this.TOPICS);
  }

  TOPICS:Topic[] = [
    {
      id:1,
      name:'Article1',
      content:'loremIpsum',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre'

    },
    {
      id:1,
      name:'Article2',
      content:'loremIpsum',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre'

    },
    {
      id:1,
      name:'Article3',
      content:'loremIpsum',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre'

    },
    {
      id:1,
      name:'Article4',
      content:'loremIpsum',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre'

    },
    {
      id:1,
      name:'Article5',
      content:'loremIpsum',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre'

    },


  ]
}
