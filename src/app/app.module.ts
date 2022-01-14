import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteAddComponent } from './MainPage/component/compte/compte-add/compte-add.component';
import { CompteConsultComponent } from './MainPage/component/compte/compte-consult/compte-consult.component';
import { CompteEditComponent } from './MainPage/component/compte/compte-edit/compte-edit.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { NavbarComponent } from './MainPage/component/navbar/navbar.component';
import { OperationsComponent } from './MainPage/component/operations/operations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CompteConsultComponent,
    CompteAddComponent,
    CompteEditComponent,
    OperationsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
