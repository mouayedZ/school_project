import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffectationService } from 'src/app/services/affectation.service';
import { CoursesService } from 'src/app/services/courses.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coursesTab: any = [];
  title: string = "Dashboard Admin";
  teachersTab: any = [];
  courseName: any;
  studentTab: any = [];
  studentFind: any;
  studentId: any;
  courseId: any;
  teacherName: any;
  errorMsg: any
  studentFirstName: any;
  errorWithNote: any;
  teacherAffect: any;
  constructor(private router: Router,
    private coursesService: CoursesService,
    private usersService: UserService,
    private affectationService: AffectationService,
    private studentsServices: StudentService,
    private teacherServices: TeacherService) { }

  ngOnInit() {

    this.coursesService.getAllCourses().subscribe((response) => {
      this.coursesTab = response.courses;


    });
    this.usersService.getAllUsers().subscribe((response) => {
      this.studentTab = response.users;
    });
    this.usersService.getAllTeacher().subscribe((response) => {
      this.teachersTab = response.users;
    })


  }
  // for courses :
  goToDisplay(x: number) {
    this.router.navigate([`courseInfo/${x}`]);
  }
  goToEdit(y: number) {
    this.router.navigate([`editCourse/${y}`]);


  }
  deleteCourse(x: number) {
    this.coursesService.deletCourseById(x).subscribe((response) => {
      if (response.msg = "delet success") {
        console.log("delete succes ");
        this.coursesService.getAllCourses().subscribe((response) => {
          this.coursesTab = response.courses;
        });
      } else {
        console.log('no delete action');

      }
    })
  }
  // for students :


  addToUser() {
    let affectation: any = {};
    affectation.studentId = this.studentId;
    affectation.courseId = this.courseId;



    this.affectationService.addAffectation(affectation).subscribe((response) => {
      console.log("here response from backend", response.msg);
      if (response.msg == "affectation is already exist") {
        console.log('here response from backend', response.msg);
        this.errorWithNote = "the student is already affect"
      }
      else {
        console.log('here response from backend', response.msg);
      }
    });
  }

  getStudentId(event, courseId) {
    this.studentId = event.target.value;
    this.courseId = courseId;


    console.log("courseId", courseId);
    console.log('here student id ', this.studentId);


  }
  // for affectation course :
  getTeacherId(event, courseId) {
    this.teacherAffect = event.target.value;
    this.courseId = courseId;


    console.log("courseId", courseId);
    console.log('here TEACHER FKnAME ', this.teacherAffect);


  }

  addteacherToCourse() {
    let affectationCourse: any = {};
    affectationCourse.teacherName = this.teacherAffect;
    affectationCourse.courseId = this.courseId;
    this.coursesService.affectCourse(affectationCourse).subscribe((response) => {
      console.log("here response from backend", response.messages);
      if (response.messages == "modif noooo  success") {
        console.log('here response from backend', response.messages);
        this.errorWithNote = "the course is already affect"
      }
      else {
        console.log('here response from backend', response.messages);
        this.coursesService.getAllCourses().subscribe((response) => {
          this.coursesTab = response.courses;


        });
      }
    });
  }
  goToDisplayStudent(x: number) {
    this.router.navigate([`studentInfo/${x}`]);

  }
  // delet student
  deleteStudent(x: number) {
    this.studentsServices.deletStudentById(x).subscribe((response) => {
      if (response.msg = "delet success") {
        console.log("delete succes ");
        this.usersService.getAllUsers().subscribe((response) => {
          this.studentTab = response.users;
        });

      } else {
        console.log('no delete action');

      }
    })
  }
  // for users :
  goToDisplayTeacher(x: number) {

    this.router.navigate([`teacherInfo/${x}`]);

  }
  // delet teacher
  deleteTeacher(x: number) {
    this.teacherServices.deletTeacherById(x).subscribe((response) => {
      if (response.msg = "delet success") {
        console.log("delete succes ");
        this.usersService.getAllTeacher().subscribe((response) => {
          this.teachersTab = response.users;

        });

      } else {
        this.errorMsg = 'there is a problem'

      }
    })
  }
  // verif teacher : 
  goToEditTeacher(id) {
    this.teacherServices.editTeacher(id).subscribe((response) => {
      console.log('that id', id)
      if (response.messages == "MODIF success") {
        this.usersService.getAllTeacher().subscribe((response) => {
          this.teachersTab = response.users;

        });
      }
      else {
        console.log('there is an error')
      }
    })

  }
  // deconnecter un teacher
  deconnecterTeacher(id) {
    this.teacherServices.deconnecterTeacher(id).subscribe((response) => {
      console.log('that id', id)
      if (response.messages == "MODIF success") {
        this.usersService.getAllTeacher().subscribe((response) => {
          this.teachersTab = response.users;

        });
      }
      else {
        console.log('there is an error')
      }
    })
  }
  sortAlphabetically(arr: string[]): string[] {
    return arr.slice().sort((a, b) => a.localeCompare(b));
  }
  statusColor(s1) {
    if (s1 == "ok") {
      return "green"


    } else {
      return "red"
    }
  }

}
