import { ProfileService } from './../../service/profile.service';
import { User } from './../../service/user.model';
import { AuthentificationService } from './../../service/authentification.service';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { AbstractControl, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: User;
  submitted:boolean=false;
  userFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    tel: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private profileService: ProfileService,private fb:FormBuilder, private userService: UserService, private router: Router) { }

  loadEvents(){
    this.profileService.getUser().subscribe(
      (response) => {this.user = response; console.log(response)}, 
      (error)=> {alert(error.message)});
  }
  ngOnInit(): void {
    this.loadEvents();
    this.userFormGroup = this.fb.group({
      userName: [this.user.userName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      email: [this.user.email, Validators.required],
      address: [this.user.address, Validators.required],
      tel: [this.user.tel,Validators.required],
      password: [this.user.password, Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userFormGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userFormGroup.invalid) {
      return;
    }
    console.log(JSON.stringify(this.userFormGroup.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.userFormGroup.reset();
  }

  onEditUser(){
    this.submitted=true;
    if(this.userFormGroup?.invalid)return;
    this.profileService.editUser(this.userFormGroup?.value).subscribe(data=>{
      alert("Success Saving user")
      this.router.navigateByUrl('/profile');
    });
  }

}
