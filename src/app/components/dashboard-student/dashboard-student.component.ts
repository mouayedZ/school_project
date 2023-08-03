import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffectationService } from 'src/app/services/affectation.service';
import { CoursesService } from 'src/app/services/courses.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {
  noteTab:any=[];
  title: string = "Dashboard Student";
  connectedTab:any=[];
  courseTab:any=[];
  studentsTab:any=[];
  courseId:any=[];
  findedCourse : any=[];
  foundedd:any=[];
  constructor(private evaluationsServices : EvaluationService,
    private coursesServices : CoursesService,
    private studentsServices : StudentService ,
    private affectationServices : AffectationService ,
    private  router : Router) { }

  ngOnInit() {
    this.connectedTab= JSON.parse(localStorage.getItem('connectedUser') || '[]');
    console.log('here id of connected',this.connectedTab[0].id)
    this.evaluationsServices.getNotesByStudent(this.connectedTab[0].id).subscribe((response) => {
      this.noteTab = response.notes;
      console.log('here id of connected',this.noteTab)
    });
    this.coursesServices.getCourseByIdStudent(this.connectedTab[0].id)
    this.studentsServices.getAllStudent().subscribe((response) => {
      this.studentsTab = response.students;

    });
   
    console.log('here value of course ID', this.connectedTab[0].id);
    this.affectationServices.getAffectationByStudent(this.connectedTab[0].id).subscribe((response) => {
      this.findedCourse = response.affectation;

      console.log('here affectation value', this.findedCourse);
      console.log('here student value', this.studentsTab);

    });
    this.serarch();
  }
  serarch() {
    this.coursesServices.getAllCourses().subscribe((response) => {
      let tab = response.courses;
      let k = 0;
      for (let j = 0; j < tab.length; j++) {
        for (let i = 0; i < this.findedCourse.length; i++) {
          if (tab[j]._id == this.findedCourse[i].courseId) {
            this.foundedd.push(tab[j]);
            k++;
          }
        }
      }
      console.log("fdfdfxxxx", this.foundedd);

    });
  }
  goToDisplay(x: number) {
    this.router.navigate([`courseInfo/${x}`]);

  }
  noteColor(n1){
    if (n1 =="bien") {
      return "green"
  
      
    } else if (n1 =="moyenne") {
      return "blue"
    }
    else{
      return "red"
    }
  }
}
