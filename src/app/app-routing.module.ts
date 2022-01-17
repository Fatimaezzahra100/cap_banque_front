import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './MainPage/component/operations/operations.component';
import { HomeComponent } from './MainPage/component/home/home.component';

const routes: Routes = [
 
  {path:"operations", component: OperationsComponent},
  {path:"home",component: HomeComponent},
  {path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
