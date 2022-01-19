import { User } from './user.model';
import { UserService } from './user.service';
import { Injectable, EventEmitter  } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private userService: UserService) { }

  users :User[] = []; 
  loggedUser : String ="";
  loggedUserId?: number;
  isLoggedIn : Boolean = false;

  
  recuperer() {
    return new Promise<void>((resolve, reject) => {
      this.userService.getUsers().subscribe(Response => {
        this.users=Response;
        resolve();
      });
     
    });
  }
  
  async signIn (user :User):Promise<Boolean>{
    await this.recuperer();
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
      }
    })
    
    return validUser;
    
  }
 
 /*
  signIn (user :User) : Boolean {
    var validUser: Boolean = false;

    this.userService.getUsers().subscribe(response => {
      response.forEach((curUser) => {
        if(user.userName=== curUser.userName && user.password === curUser.password){
          validUser = true;
          console.log(validUser);
          this.loggedUser = curUser.userName;
          this.loggedUserId= curUser.userId;
          this.isLoggedIn=true;
          localStorage.setItem('loggedUser', String(this.loggedUser));
          localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
          localStorage.setItem('userId', String(this.loggedUserId));
        } else {validUser = false}
      }) 
      
    });
    
    console.log(validUser);
    return validUser;
    
      
  }*/

  signUp (){
  }


}
