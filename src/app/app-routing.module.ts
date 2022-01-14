import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteAddComponent } from './MainPage/component/compte/compte-add/compte-add.component';
import { CompteConsultComponent } from './MainPage/component/compte/compte-consult/compte-consult.component';
import { CompteEditComponent } from './MainPage/component/compte/compte-edit/compte-edit.component';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { HomeComponent } from './MainPage/component/home/home.component';

const routes: Routes = [
  {path :"compte" , component : CompteConsultComponent},
  {path :"edit" , component : CompteEditComponent},
  {path :"add" , component : CompteAddComponent},
  {path:"operations", component: OperationsComponent},
  {path:"home",component: HomeComponent},
  {path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
