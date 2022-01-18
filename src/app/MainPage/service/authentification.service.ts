import { User } from './user.model';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private userService: UserService) { }

  users :User[] = []; 
  loggedUser : String ="";
  loggedUserId?: number;
  isLoggedIn : Boolean = false;
 
  signIn (user :User):Boolean{
    this.userService.getUsers().subscribe(Response=>this.users=Response);
    let validUser: Boolean=false;
    this.users.forEach((curUser) => {
      if(user.userName=== curUser.userName && user.password === curUser.password){
        validUser = true;
        this.loggedUser = curUser.userName;
        this.loggedUserId= curUser.userId;
        this.isLoggedIn=true;
        localStorage.setItem('loggedUser', String(this.loggedUser));
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
        localStorage.setItem('userId', String(this.loggedUserId));
      }})
      return validUser;
  }

  signUp (){
  }


}
