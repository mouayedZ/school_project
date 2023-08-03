import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesUrl:string="http://localhost:3000/courses"
  constructor(private httpClient: HttpClient) { }
  getAllCourses(){
   
    return this.httpClient.get<{courses : any}>(this.coursesUrl);
  }
  getCoursesByTeacher(id){
    return this.httpClient.get<{courses : any}>(this.coursesUrl + "/"+ id);
  }
  // response : one object
  getCourseById(id){
    return this.httpClient.get<{course : any}>(this.coursesUrl +  "/get/" + id);
  }
  // response : bolean/string
  deletCourseById(id){
    return this.httpClient.delete<{msg : any}>(this.coursesUrl +  "/" + id);

  }
  // response :boolean /string
  addCourse(courseObj){
    return this.httpClient.post<{msg : any}>(this.coursesUrl,courseObj); 
  }
  // response : object/boolean/string
  editCourse(courseObj){
    return this.httpClient.put<{messages : any}>(this.coursesUrl,courseObj );
    
  }
  // getCourseByIdStudent :
  getCourseByIdStudent(id){
    return this.httpClient.get<{course : any}>(this.coursesUrl +  "/students/" + id);
  }
  affectCourse(courseObj){
    return this.httpClient.put<{messages : any}>(this.coursesUrl + "/affect/",courseObj );
    
  }
}

