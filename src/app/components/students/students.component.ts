import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentTab:any=[];
  student: any = this.studentTab;
  

  constructor(private usersServices : UserService) { }

  ngOnInit() {

    this.usersServices.getAllUsers().subscribe((response)=>{
      this.studentTab = response.users;
      console.log('here avatar',this.studentTab)
      });
  }

}
