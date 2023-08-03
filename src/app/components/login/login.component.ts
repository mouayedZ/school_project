import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  title: string = "Login";
  errorMsg: string;
  constructor(private x : FormBuilder ,
    private router : Router ,
    private userService : UserService) { }

  ngOnInit() {
    this.loginForm = this.x.group ({
      email : ["",[Validators.required,Validators.email]],
      pwd : ["",[Validators.required ,  ]], 

    });
  }
  // login(){
  //   console.log("here is login values", this.loginForm.value);
  // }
  login(){
    console.log("here is user obj",this.loginForm.value );
    this.userService.login(this.loginForm.value ).subscribe((response)=>{
      console.log("here response from backend",response);
      console.log("here response from connected",response.connecteduser);
      if(response.msg !="welcome"){
        this.errorMsg="please check your email/pwd"

      }else{
      if (response.connecteduser.role=="teacher" && response.connecteduser.status== "ok" ) {
       
        let connectedTab = JSON.parse(localStorage.getItem('connectedUser') || '[]'); 
    
        connectedTab.push(response.connecteduser);
          localStorage.setItem('connectedUser',JSON.stringify(connectedTab));
        this.router.navigate([""]);
      }
      if (response.connecteduser.role=="parent") {
        let connectedTab = JSON.parse(localStorage.getItem('connectedUser') || '[]'); 
        connectedTab.push(response.connecteduser);
          localStorage.setItem('connectedUser',JSON.stringify(connectedTab));
        this.router.navigate([""]);
      }
      else if (response.connecteduser.role=="student") {
        let connectedTab = JSON.parse(localStorage.getItem('connectedUser') || '[]'); 
    
        connectedTab.push(response.connecteduser);
          localStorage.setItem('connectedUser',JSON.stringify(connectedTab));
        this.router.navigate([""]);
        
      } 
     
      else {
        this.errorMsg="the compte is not already verify"
        
      }
      }
      
      
      

    });

  }

}
