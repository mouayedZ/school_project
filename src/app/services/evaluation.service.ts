import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  evaluationUrl:string="http://localhost:3000/evaluation"
  constructor(private httpClient: HttpClient) { }
  getAllEvaluations(){
    return this.httpClient.get<{evaluations : any}>(this.evaluationUrl);
  }
  // response : one object
  // response : bolean/string
  deletCourseById(id){
    return this.httpClient.delete<{msg : any}>(this.evaluationUrl +  "/" + id);

  }
  // response :boolean /string
  addEvaluation(evaluationObj){
    return this.httpClient.post<{msg : any}>(this.evaluationUrl,evaluationObj); 
  }
  // response : object/boolean/string
  editCourse(courseObj){
    return this.httpClient.put<{messages : any}>(this.evaluationUrl,courseObj );
    
  }
    // get affectation By course :
    getStudentByCourse(id){
      return this.httpClient.get<{affectation : any}>(this.evaluationUrl +  "/" + id);
    }
// get notes by student : 
getNotesByStudent(id){
  return this.httpClient.get<{notes : any}>(this.evaluationUrl +  "/students/" + id);
}
// get note by number of tel :
getNotesByTel(id){
  return this.httpClient.get<{notes : any}>(this.evaluationUrl +  "/note/" + id);
}
}

