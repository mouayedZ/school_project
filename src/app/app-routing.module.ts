import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { SignupTestComponent } from './components/signup-test/signup-test.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchTeacherComponent } from './components/search-teacher/search-teacher.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTeacherComponent } from './components/dashboard-teacher/dashboard-teacher.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { StudentsCoursComponent } from './components/students-cours/students-cours.component';
import { UserService } from './services/user.service';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { LofinTestComponent } from './components/lofin-test/lofin-test.component';
import { ConfirmedSignupComponent } from './components/confirmed-signup/confirmed-signup.component';
import { TeacherComponent } from './components/teacher/teacher.component';


const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "signup",component: SignupComponent},
  {path: "login",component: LoginComponent},
  {path: "signupTeacher",component: SignupTeacherComponent},
  {path: "signupParent",component: SignupParentComponent},
  {path: "signupTest",component: SignupTestComponent},
  {path: "addCourse",component: AddCourseComponent},
  {path: "searchTeacher",component: SearchTeacherComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: "dashboardTeacher",component: DashboardTeacherComponent},
  {path: "courseInfo/:id",component: CourseInfoComponent},
  {path: "editCourse/:id",component: AddCourseComponent},
  {path: "courses",component: CoursesComponent},
  {path: "teachers",component: TeachersComponent},
  {path: "students",component: StudentsComponent},
  {path: "studentInfo/:id",component: StudentInfoComponent},
  {path: "studentCours/:id",component: StudentsCoursComponent},
  {path: "dashboardStudent",component: DashboardStudentComponent},
  {path: "loginTest",component: LoginTestComponent},
  {path: "searchNote",component: SearchNoteComponent},
  {path: "lofin",component: LofinTestComponent},
  {path: "confirmed/:email",component: ConfirmedSignupComponent},
  {path: "teacherInfo/:id",component: TeacherComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private userService:UserService){

  }
   connected=this.userService.isConnected()

}
