import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})
export class SearchTeacherComponent implements OnInit {
title: string="search teacher";
obj:any={};
searchTeacher: FormGroup;
searchTab:any=[];
  constructor(private teacherServices  : TeacherService) { }

  ngOnInit() {
  }
  searchBySpeciality(){
    console.log("here value of your search",this.obj,this.obj.speciality);
    this.teacherServices.getTeachersBySpeciality(this.obj.speciality).subscribe((response) => {
      this.searchTab = response.teachers;
        
    });
  
  
  }

}
