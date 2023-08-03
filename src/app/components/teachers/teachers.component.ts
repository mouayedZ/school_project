import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
teachersTab:any=[];
y: any = this.teachersTab;
  constructor(private usersServices: UserService) { }

  ngOnInit() {
    
this.usersServices.getAllTeacher().subscribe((response)=>{
this.teachersTab = response.users;
})
   

  }

}
