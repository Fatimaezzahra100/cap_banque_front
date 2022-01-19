import { Router } from '@angular/router';
import { ProfileService } from './../../service/profile.service';
import { UserService } from './../../service/user.service';
import { User } from './../../service/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  constructor(private profileService : ProfileService, private router:Router) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(){
    this.profileService.getUser().subscribe(
      (response) => {this.user = response; console.log(response)}, 
      (error)=> {alert(error.message)});
  }

  onEditUser(){
    this.router.navigateByUrl('/Edit');
  }
}
