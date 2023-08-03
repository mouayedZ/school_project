import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentUrl:string="http://localhost:3000/students"
  constructor(private httpClient: HttpClient) { }
  getAllStudent(){
    return this.httpClient.get<{students : any}>(this.studentUrl);
  }
  // response : one object
  getStudentById(id){
    return this.httpClient.get<{student : any}>(this.studentUrl +  "/" + id);
  }
  // response : bolean/string
  deletStudentById(id){
    return this.httpClient.delete<{msg : any}>(this.studentUrl +  "/" + id);

  }
  // response :boolean /string
  addStudent(studentObj){
    return this.httpClient.post(this.studentUrl,studentObj);
  }
  // response : object/boolean/string
  editStudent(studentObj){
    return this.httpClient.put(this.studentUrl,studentObj);
    
  }
   // get student By course :
   getStudentByCourse(id){
    return this.httpClient.get<{students : any}>(this.studentUrl +  "/course/" + id);
  }

}
