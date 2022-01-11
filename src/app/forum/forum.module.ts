import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { TopicService } from '../service/topic.service';
const routes:Routes = [
  {path:'home',component: ForumComponent},
  
]

@NgModule({
  declarations: [
    ForumComponent,
    TopicListComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TopicService
  ]
})
export class ForumModule { }
