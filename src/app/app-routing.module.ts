import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteAddComponent } from './MainPage/component/compte/compte-add/compte-add.component';
import { CompteConsultComponent } from './MainPage/component/compte/compte-consult/compte-consult.component';
import { CompteEditComponent } from './MainPage/component/compte/compte-edit/compte-edit.component';
import { UserConsultComponent } from './MainPage/component/user/user-consult/user-consult.component';

const routes: Routes = [
  {path :"compte" , component : CompteConsultComponent},
  {path :"edit" , component : CompteEditComponent},
  {path :"add" , component : CompteAddComponent},
  {path :"userinformation", component : UserConsultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
