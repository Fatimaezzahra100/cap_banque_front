import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { User } from 'src/app/MainPage/model/user.model';
import { UserService } from 'src/app/MainPage/service/user.service';
import { AppDataState, DataStateEnum } from 'src/app/MainPage/state/compte.state';

@Component({
  selector: 'app-user-consult',
  templateUrl: './user-consult.component.html',
  styleUrls: ['./user-consult.component.css']
})
export class UserConsultComponent implements OnInit {

  users$ : Observable <AppDataState<User[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  onGetUsers(){
    this.users$ = this.userService.getUsers().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

}
