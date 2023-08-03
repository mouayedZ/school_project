import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentId:any;
  findedStudent:any=[];
  constructor(  private studentsServices : StudentService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.studentId=this.activatedRoute.snapshot.paramMap.get('id');
    this.studentsServices.getStudentById(this.studentId).subscribe((response)=>{
this.findedStudent=response.student
    })
  }

}
