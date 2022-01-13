import { Injectable } from '@angular/core';
import { Topic } from '../component/topic/topic';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  TOPICS: Topic[] = [
    {
      id: 1,
      name: 'Article1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 1,
        name: "category1"
      }

    },
    {
      id: 2,
      name: 'Article2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },
    {
      id: 3,
      name: 'Article3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },
    {
      id: 4,
      name: 'Article4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 3,
        name: "category3"
      }

    },
    {
      id: 5,
      name: 'Article5',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
      created_at: new Date('05/05/2020'),
      author: 'Alexandre',
      category: {
        id: 2,
        name: "category2"
      }

    },


  ]

  getTopics(): Observable<Topic[]> {

    return of(this.TOPICS);
  }

  getTopic(id: number): Observable<Topic> {
    let topic = this.TOPICS.find(topics => topics.id === id);
    if (topic === undefined) {
      return of();
    }
    return of(topic);
  }

  getByCategory(id: number): Observable<Topic[]> {
    let topics = this.TOPICS.filter(topics => topics.category.id === id);
    return of(topics);
  }

}
