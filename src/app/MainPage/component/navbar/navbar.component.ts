import { AuthentificationService } from './../../service/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthentificationService) { }

  ngOnInit(): void {
  }

  loggedUser : String = this.authService.loggedUser;


}
