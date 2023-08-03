import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {  MatSortModule } from '@angular/material/sort';
import {  MatTableModule  } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CodeInputModule} from "angular-code-input";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SchoolServiceComponent } from './components/school-service/school-service.component';
import { AboutComponent } from './components/about/about.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { BeTeacherComponent } from './components/be-teacher/be-teacher.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SayComponent } from './components/say/say.component';
import { BannerComponent } from './components/banner/banner.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { SignupTestComponent } from './components/signup-test/signup-test.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchTeacherComponent } from './components/search-teacher/search-teacher.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTeacherComponent } from './components/dashboard-teacher/dashboard-teacher.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { StudentsCoursComponent } from './components/students-cours/students-cours.component';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { LoginTestDirective } from './components/login-test.directive';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { EvaluationInfoComponent } from './components/evaluation-info/evaluation-info.component';
import { LofinTestComponent } from './components/lofin-test/lofin-test.component';
import { ConfirmedSignupComponent } from './components/confirmed-signup/confirmed-signup.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SchoolServiceComponent,
    AboutComponent,
    TeachersComponent,
    TeacherComponent,
    CoursesComponent,
    HomeComponent,
    CourseComponent,
    BeTeacherComponent,
    ReservationComponent,
    SayComponent,
    BannerComponent,
    SignupComponent,
    LoginComponent,
    SignupTeacherComponent,
    SignupParentComponent,
    SignupTestComponent,
    AddCourseComponent,
    SearchTeacherComponent,
    DashboardComponent,
    DashboardTeacherComponent,
    CourseInfoComponent,
    CourseFormComponent,
    StudentComponent,
    StudentsComponent,
    StudentInfoComponent,
    StudentsCoursComponent,
    DashboardStudentComponent,
    LoginTestDirective,
    LoginTestComponent,
    SearchNoteComponent,
    EvaluationInfoComponent,
    LofinTestComponent,
    ConfirmedSignupComponent,
    TeacherInfoComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
   
    MatSortModule,
    
   
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: false,
    }),
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
