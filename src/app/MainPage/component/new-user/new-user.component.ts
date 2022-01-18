import { UserService } from './../../service/user.service';
import { AuthentificationService } from './../../service/authentification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    userFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    tel: new FormControl(''),
  });

  submitted:boolean=false;

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router, private authService : AuthentificationService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      userName: ["", Validators.required],
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required],
      tel: [1234567890, Validators.required],
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


  onSaveUser(){
    this.submitted=true;
    if(this.userFormGroup?.invalid)return;
    this.userService.saveUser(this.userFormGroup?.value).subscribe(data=>{
      alert("Success Saving user")
    });
  }

  

}
