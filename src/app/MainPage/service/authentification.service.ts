import { UserLogin } from './../Model/UserLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  users: UserLogin[] = [
    {"userId":1,"userName" : "Fati" , "passeWord" :"xxx" , "roles" : ['admin']},
    {"userId":2,"userName" : "Laura" , "passeWord" :"yyy" , "roles" : ['user']}
  ]

  loggedUser : string ="";
  loggedUserId?: number;
  isLoggedIn : Boolean = false;
  roles? : string[] ;

  signIn (user :UserLogin):Boolean{
    let validUser: Boolean=false;
    this.users.forEach((curUser) => {
      if(user.userName=== curUser.userName && user.passeWord === curUser.passeWord){
        validUser = true;
        this.loggedUser = curUser.userName;
        this.loggedUserId= curUser.userId;
        this.isLoggedIn=true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
        localStorage.setItem('userId', String(this.loggedUserId));
      }})
      return validUser;
  }


  signUp (){
  }


}
