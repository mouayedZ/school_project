import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-confirmed-signup',
  templateUrl: './confirmed-signup.component.html',
  styleUrls: ['./confirmed-signup.component.css']
})
export class ConfirmedSignupComponent implements OnInit {
  loading: boolean;
  email: string;
  showAlert: boolean;
  // @ts-ignore

  resetPasswordForm: UntypedFormGroup;

  code: string;
  loadingSubmit: boolean;
  user:any;
  message:any;

resetPasswordNgForm:FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
    private _authService: TestService,
    private _router: Router,
  
   
   ) { }

  ngOnInit() {
    this.email = this._activatedRoute.snapshot.paramMap.get('email');
    console.log(this.email)
    if(!this.email){
    }
    this._authService.gett(this.email).subscribe((users: any) => {
      console.log(users)
      console.log(users.status)
      if(users.status==="confirmed"){
        this._router.navigateByUrl('signin');
      }
    },()=>{
      this._router.navigateByUrl('sign-up');

    });

  }

  login() {
      this.loadingSubmit = true;
      console.log('here values',this.code)
      this._authService.activateSignUpAccount(this.email, this.code).subscribe((response) => {
          console.log("emailsdsd ", response)
          if(response.message){
            this.message=response.message;
          }else{
          this._authService.gett(this.email).subscribe((founded) => {
            console.log('here response',founded)
            this.user = founded.users;
            localStorage.setItem('connectedUser',JSON.stringify(this.user));
          });
          this.loadingSubmit = false;
          const redirectURL = '';
          this._router.navigateByUrl(redirectURL);}
        },
        () => {
          this.loadingSubmit = false;
        },
      );
  }


  onCodeChanged(code: string) {
    this.code = code;
  }
}
