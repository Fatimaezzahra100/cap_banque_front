import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteAddComponent } from './MainPage/component/compte/compte-add/compte-add.component';
import { CompteConsultComponent } from './MainPage/component/compte/compte-consult/compte-consult.component';
import { CompteEditComponent } from './MainPage/component/compte/compte-edit/compte-edit.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { NavbarComponent } from './MainPage/component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserConsultComponent } from './MainPage/component/user/user-consult/user-consult.component';
import { UserAddComponent } from './MainPage/component/user/user-add/user-add.component';
import { UserEditComponent } from './MainPage/component/user/user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CompteConsultComponent,
    CompteAddComponent,
    CompteEditComponent,
    UserConsultComponent,
    UserAddComponent,
    UserEditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
