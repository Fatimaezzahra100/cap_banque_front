import { AuthentificationService } from './../../service/authentification.service';
import { UserLogin } from './../../Model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : UserLogin = new UserLogin;
  erreur=0;
  constructor(private authService:AuthentificationService, private router :Router ) { }

  ngOnInit(): void {
  }

  onLoggedIn (){
     console.log(this.user);
     let isValidUser : Boolean = this.authService.signIn(this.user);
     if(isValidUser){
       this.router.navigateByUrl('/home');
     } else{
        //alert('login ou mot de passe incorrect')
        this.erreur=1
     }
    }
}
