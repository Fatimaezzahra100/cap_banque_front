
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { NavbarComponent } from './MainPage/component/navbar/navbar.component';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { LoginComponent } from './MainPage/component/login/login.component';
import { SoldeCompteCourantComponent } from './MainPage/component/compte/solde-compte-courant/solde-compte-courant.component';
import { NewUserComponent } from './MainPage/component/new-user/new-user.component';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './MainPage/component/terms/terms.component';
import { ProfileComponent } from './MainPage/component/profile/profile.component';
import { RibConsultationComponent } from './MainPage/component/rib-consultation/rib-consultation.component';
import { EditUserComponent } from './MainPage/component/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OperationsComponent,
    SoldeCompteCourantComponent,
    LoginComponent,
    NewUserComponent,
    TermsComponent,
    ProfileComponent,
    RibConsultationComponent,
    EditUserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
