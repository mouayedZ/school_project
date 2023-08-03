import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  affectationUrl:string="http://localhost:3000/affectation"
  constructor(private httpClient: HttpClient) { }
  getAllAffectations(){
   
    return this.httpClient.get<{affectations : any}>(this.affectationUrl);
  }
  // response : one object
 
  // response : bolean/string
  deletCourseById(id){
    return this.httpClient.delete<{msg : any}>(this.affectationUrl +  "/" + id);

  }
  // response :boolean /string
  addAffectation(affectObj){
    return this.httpClient.post<{msg : any}>(this.affectationUrl,affectObj); 
  }
  // response : object/boolean/string
  editCourse(courseObj){
    return this.httpClient.put<{messages : any}>(this.affectationUrl,courseObj );
    
  }
    // get affectation By course :
    getStudentByCourse(id){
      return this.httpClient.get<{affectation : any}>(this.affectationUrl +  "/" + id);
    }
      // get affectation By student :
      getAffectationByStudent(id){
        return this.httpClient.get<{affectation : any}>(this.affectationUrl +  "/students/" + id);
      }

}

