import { User } from './../../service/user.model';
import { AuthentificationService } from './../../service/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user! : User ;
  erreur=0;
  constructor(private authService:AuthentificationService, private router :Router ) { }
  ngOnInit(): void {
  }

  onLoggedIn (formValues:any){
    
    this.authService.signIn(formValues).then(result => {

      if(result){
        this.router.navigateByUrl('/home');
      } else{
         alert('Incorrect userName or password')
         this.erreur=1
      }
    });
    
   }
}
