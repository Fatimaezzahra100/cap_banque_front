import { TermsComponent } from './MainPage/component/terms/terms.component';
import { NewUserComponent } from './MainPage/component/new-user/new-user.component';
import { LoginComponent } from './MainPage/component/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { HomeComponent } from './MainPage/component/home/home.component';

const routes: Routes = [
 
  {path:"operations", component: OperationsComponent},
  {path:"home",component: HomeComponent},
  {path:"", component: LoginComponent},
  {path:"newUser", component: NewUserComponent},
  {path:"terms", component:TermsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
