import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteAddComponent } from './MainPage/component/compte/compte-add/compte-add.component';
import { CompteConsultComponent } from './MainPage/component/compte/compte-consult/compte-consult.component';
import { CompteEditComponent } from './MainPage/component/compte/compte-edit/compte-edit.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { NavbarComponent } from './MainPage/component/navbar/navbar.component';
import { ForumModule } from './forumSection/forum.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CompteConsultComponent,
    CompteAddComponent,
    CompteEditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
