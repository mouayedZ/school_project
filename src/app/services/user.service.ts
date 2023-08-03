import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // destination adress
usersUrl:string="http://localhost:3000/users"
// httpClient : livreur
  constructor(private httpClient: HttpClient) { }

  
  // response : one object
 
  // response : bolean/string
 
  // response :boolean /string
  signup(userObj,img:File){
    let fData = new FormData();
    fData.append("img",img);
    fData.append("firstName",userObj.firstName);
    fData.append("lastName",userObj.lastName);
    fData.append("email",userObj.email);
    fData.append("pwd",userObj.pwd);
    fData.append("confirmPwd",userObj.confirmPwd);
    fData.append("role",userObj.role);
    fData.append("tel",userObj.tel);
    fData.append("dateOfBirthday",userObj.dateOfBirthday);
    
    
    console.log("service", userObj);
    
    return this.httpClient.post<{msg:any}>(this.usersUrl + "/signup",fData);
  }
  // signup teacher:
  signupTeacher(teacherObj,cv:File){
    let fData = new FormData();
    fData.append("cv",cv);
    fData.append("firstName",teacherObj.firstName);
    fData.append("lastName",teacherObj.lastName);
    fData.append("email",teacherObj.email);
    fData.append("pwd",teacherObj.pwd);
    fData.append("confirmPwd",teacherObj.confirmPwd);
    fData.append("role",teacherObj.role);
    fData.append("tel",teacherObj.tel);
    fData.append("adresse",teacherObj.adresse);
    fData.append("speacialty",teacherObj.speacialty);
    fData.append("status",teacherObj.status);
  
    
    
    console.log("service", teacherObj);
    
    return this.httpClient.post<{msg:any}>(this.usersUrl + "/signupTeacher",fData);
  }

  // signup parent:
  signupParent(parentObj){
    
  
    
    
    console.log("service", parentObj);
    
    return this.httpClient.post<{msg:any}>(this.usersUrl + "/signupParent",parentObj);
  }
  login(obj) {
    return this.httpClient.post<{msg:string,connecteduser:any}>(this.usersUrl + "/login",obj);
  }
  // get students:

  getAllUsers(){
   
    return this.httpClient.get<{users : any}>(this.usersUrl);
  }
  // get teacher :
  getAllTeacher(){
   
    return this.httpClient.get<{users : any}>(this.usersUrl + "/teachers" );
  }
  isConnected(){
    if (localStorage.getItem("connectedUser")){
          return true;
    }else{
      return false;
    }
  }



  

 
 
}
