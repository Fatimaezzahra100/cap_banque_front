import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './component/forum/forum.component';
import { TopicListComponent } from './component/topic-list/topic-list.component';
import { TopicComponent } from './component/topic/topic.component';
import { TopicService } from './service/topic.service';
import { ForumHeaderComponent } from './component/forum-header/forum-header.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryService } from './service/category.service';
import { HomeComponent } from './component/home/home.component';
import { TopicDetailComponent } from './component/topic-detail/topic-detail.component';
import { CategoryDetailComponent } from './component/category-detail/category-detail.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'topics/:id', component: TopicDetailComponent }
]

@NgModule({
  declarations: [
    ForumComponent,
    TopicListComponent,
    TopicComponent,
    ForumHeaderComponent,
    CategoryListComponent,
    CategoryComponent,
    HomeComponent,
    TopicDetailComponent,
    CategoryDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TopicService,
    CategoryService
  ]
})
export class ForumModule { }
