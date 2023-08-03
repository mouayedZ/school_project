import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherUrl:string="http://localhost:3000/teachers"
  constructor(private httpClient: HttpClient) { }
  getAllTeachers(){
    return this.httpClient.get(this.teacherUrl);
  }
  signup(userObj,cv:File){
    let fData = new FormData();
    fData.append("cv",cv);
    fData.append("firstName",userObj.firstName);
    fData.append("lastName",userObj.lastName);
    fData.append("email",userObj.email);
    fData.append("pwd",userObj.pwd);
    fData.append("confirmPwd",userObj.confirmPwd);
    fData.append("role",userObj.role);
    fData.append("tel",userObj.tel);
    fData.append("adresse",userObj.adresse);
    fData.append("speacialty",userObj.speacialty);
    
    
    console.log("service", userObj);
    
    return this.httpClient.post<{msg:any}>(this.teacherUrl + "/signup",fData);
  }
  // response : one object
  getTeachersById(id){
    return this.httpClient.get(this.teacherUrl +  "/" + id);
  }
  getTeachersBySpeciality(id){
    return this.httpClient.get<{teachers:any}>(this.teacherUrl +  "/specality/" + id);
  }
  // response : bolean/string
  deletTeacherById(id){
    return this.httpClient.delete<{msg:any}>(this.teacherUrl +  "/" + id);

  }
  // response :boolean /string
  addTeacher(teacherObj){
    return this.httpClient.post(this.teacherUrl,teacherObj);
  }
  // response : object/boolean/string
  editTeacher(id){
    return this.httpClient.put<{messages:any}>(this.teacherUrl +  "/edit/" + id , id);
    
  }
  deconnecterTeacher(id){
    return this.httpClient.put<{messages:any}>(this.teacherUrl +  "/deconnecter/" + id , id);
    
  }
  

}


