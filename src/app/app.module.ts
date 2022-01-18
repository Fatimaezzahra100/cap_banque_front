import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { NavbarComponent } from './MainPage/component/navbar/navbar.component';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { SoldeCompteCourantComponent } from './MainPage/component/compte/solde-compte-courant/solde-compte-courant.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OperationsComponent,
    SoldeCompteCourantComponent
   
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
