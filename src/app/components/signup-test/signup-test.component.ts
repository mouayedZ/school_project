import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-signup-test',
  templateUrl: './signup-test.component.html',
  styleUrls: ['./signup-test.component.css']
})
export class SignupTestComponent implements OnInit {
  signupTestForm :FormGroup;
  title: string = "Hello Admin";
  teacher : Boolean=false;
  messageError:any;
    constructor(private x : FormBuilder,private router:Router,private testServices:TestService) { }
    

  ngOnInit() {
    this.signupTestForm = this.x.group ({
      firstName : ["",[Validators.required, Validators.minLength(3)]],
      lastName : ["", [Validators.required, Validators.minLength(3)]],
      tel  : ["", [Validators.required, Validators.minLength(8)]],
      email : ["",[Validators.required, Validators.email]],
      pwd : ["",],
     
      

    });
  }
  signUp(): void {
    // Do nothing if the form is invalid
    if (this.signupTestForm.invalid) {
        this.messageError ='form is invalid';
    } 

    // Disable the form
    this.signupTestForm.disable();
    console.log('here value of group',this.signupTestForm.value)

    // Hide the alert
    // Sign up
    // @ts-ignore
    this.signupTestForm.value.role="admin"
    this.testServices.signUp(this.signupTestForm.value).subscribe(
      () => {this.router.navigate([`confirmed/${this.signupTestForm.value.email}`]);
        ;
      },
      () => {
        // Re-enable the form
        this.signupTestForm.enable();
        this.messageError ='form is invalid';
      },
    );

  }
}
