import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-parent',
  templateUrl: './signup-parent.component.html',
  styleUrls: ['./signup-parent.component.css']
})
export class SignupParentComponent implements OnInit {
  signupParentForm : FormGroup;
  errorMsg: string;
  title: string = "Hello Parent";
  constructor(private x : FormBuilder ,
  private  router : Router , 
 private  usersService : UserService  ) { }

  ngOnInit() {
    this.signupParentForm = this.x.group({
      firstName  : ["",[Validators.required , Validators.minLength( 3)]],
      lastName : ["",[Validators.required , Validators.minLength( 3)]],
      tel : ["",[Validators.required , Validators.minLength( 8)]],
      telChild : ["",[Validators.required , Validators.minLength( 8)]],
      adresse : ["",[Validators.required ]],
      email : ["",[Validators.required ]],
      pwd : ["",[Validators.required ]],
      confirmPwd : ["",[Validators.required ,]],
    })
  }
  signupParent() {

    console.log('here signup clicked', this.signupParentForm.value);
    this.signupParentForm.value.role = "parent";
  
    this.usersService.signupParent(this.signupParentForm.value).subscribe((response) => {
      console.log("here response from backend", response.msg);
      if (response.msg == "add with  succes" ) {
        this.router.navigate(["login"]);
      } else {
        this.errorMsg   = "the child number is available"
      }

    });

  }

}
