import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
conenctedUser:boolean=false;
userConnected :any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.userConnected =  JSON.parse(localStorage.getItem('connectedUser') );
    if (this.userConnected ) {
      this.conenctedUser = true;
      console.log('here value of user',this.conenctedUser);
    }
    else{
      this.conenctedUser = false;
    }
    
  }
  logout(){
    localStorage.removeItem("connectedUser");
      this.router.navigate(["login"]);
  }
}
