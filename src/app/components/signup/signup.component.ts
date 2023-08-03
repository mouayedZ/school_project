import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  title: string = "Hello Student";
  errorMsg: string;
  errorNumber:string;
  imagePreview: any;
  constructor(private x : FormBuilder,
    private usersService: UserService,
    private router: Router) {  
  }

  ngOnInit() {
    this.signupForm = this.x.group ({
      firstName : ["",[Validators.required , Validators.minLength( 3)]],
      lastName : ["",[Validators.required , Validators.minLength( 3)]],
      tel  : ["",[Validators.required ]],
      dateOfBirthday : ["",[Validators.required]],
      img : ["",[Validators.required]],
      email : ["",[Validators.required,Validators.email]],
      pwd : ["",[Validators.required  , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*\\d]+$')]] ,
      confirmPwd : ["",[Validators.required]],
      

    });
  }
  signup() {

    console.log('here signup clicked', this.signupForm.value);
    if (this.signupForm.valid) {
      this.signupForm.value.role = "student";
      this.usersService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
        console.log("here response from backend", response.msg);
        if (response.msg == 'add with  succes') {
          this.router.navigate(["login"]);
  
        }else if (response.msg ==  "number is already exist") {
          this.errorNumber= 'the number is exist'
        } else {
          this.errorMsg = "verif your informations"
  
  
        }
  
      });
    }
    else {
      this.errorMsg = "verif your informations"


    }
   

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


}



