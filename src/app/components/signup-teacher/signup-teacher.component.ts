import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
  readMore: boolean = true;
  visible: boolean = false;
  signupTeacherForm: FormGroup;

  errorMsg: string;
  imagePreview: any;
  title: string = "Hello Teacher";
  errorEmail:string;
  constructor(private x: FormBuilder,
    private usersService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.signupTeacherForm = this.x.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      tel: ["", [Validators.required, Validators.minLength(8)]],
      speacialty: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*\\d]+$')]],
      confirmPwd: ["", [Validators.required]],
      cv: ["", [Validators.required]],
      adresse: ["", [Validators.required]],


    })
  }
  generateId(t) {
    let max;
    if (t.length == 0) {
      max = 0
    } else {
      max = t[0].id;
      for (let i = 0; i < t.length; i++) {
        if (t[i].id > max) {
          max = t[i].id;
        }



      }
    }
    return max;
  }
  // signupTeacher(){
  //   console.log("here teacher values",this.signupTeacherForm.value);
  //   let teachersTab = JSON.parse(localStorage.getItem('teachers') || '[]'); 
  //   this.signupTeacherForm.value.id=this.generateId(teachersTab)+1;
  //   teachersTab.push(this.signupTeacherForm.value);
  //   localStorage.setItem('teachers',JSON.stringify(teachersTab));

  // }
  onclick() {
    this.readMore = !this.readMore;
    this.visible = !this.visible;
  }
  signup() {

    console.log('here signup clicked', this.signupTeacherForm.value);
    this.signupTeacherForm.value.role = "teacher";
    this.signupTeacherForm.value.status = "NotOk";
    this.usersService.signupTeacher(this.signupTeacherForm.value, this.signupTeacherForm.value.cv).subscribe((response) => {
      console.log("here response from backend", response.msg);
      if (response.msg=='add widh  succes') {
        this.router.navigate(["login"]);

      }  else if (response.msg ==  "the email is already exist") {
        this.errorEmail= 'the email is exist'
      }
      else {
        this.errorMsg = "error with signup"


      }

    });

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupTeacherForm.patchValue({ cv: file });
    this.signupTeacherForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
