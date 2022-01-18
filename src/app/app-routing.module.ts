import { TermsComponent } from './MainPage/component/terms/terms.component';
import { NewUserComponent } from './MainPage/component/new-user/new-user.component';
import { LoginComponent } from './MainPage/component/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { HomeComponent } from './MainPage/component/home/home.component';
import { ProfileComponent } from './MainPage/component/profile/profile.component';
import { RibConsultationComponent } from './MainPage/component/rib-consultation/rib-consultation.component';

const routes: Routes = [
 
  {path:"operations", component: OperationsComponent},
  {path:"home",component: HomeComponent},
  {path:"", component: LoginComponent},
  {path:"newUser", component: NewUserComponent},
  {path:"terms", component:TermsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"rib", component:RibConsultationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
