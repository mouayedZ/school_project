import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent implements OnInit {
coursesTab:any=[];
connectedTeacher:any;
teacherId:any;
noteTab:any=[];
title: string = "Dashboard Teacher";

  constructor( private router:Router ,
    private coursesServices : CoursesService ,
    private evaluationServices : EvaluationService) { }

  ngOnInit() {
    this.connectedTeacher = JSON.parse(localStorage.getItem('connectedUser') || '[]');
    for (let i = 0; i < this.connectedTeacher.length; i++) {
      this.teacherId=this.connectedTeacher[i].id
      break;
      
    }
    console.log('here teacher id',this.teacherId)

    this.coursesServices.getCoursesByTeacher(this.teacherId).subscribe((response) => {
      this.coursesTab = response.courses;
console.log('here course',this.coursesTab)
    });
  }
  goToDisplay(x:number) {
    this.router.navigate([`courseInfo/${x}`]);

  }
  showStudents(x:number) {
    this.router.navigate([`studentCours/${x}`]);

  }
  goToEdit(y: number) {
    this.router.navigate([`editCourse/${y}`]);


  }
}
