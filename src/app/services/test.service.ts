import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testUrl:string="http://localhost:3000/test"
  constructor(private httpClient: HttpClient) { }
  signUp  (obj) {
    return this.httpClient.post<{message:any}>(`${this.testUrl}`,  obj
     
    );
  }
  gett(obj){
   
    return this.httpClient.get<{users : any}>(this.testUrl + "/usersByEmail" + "/" + obj  );
  }
  activateSignUpAccount(email: string, code: string) {
    return this.httpClient.post<{user:any , message:any , error:any}>(`${this.testUrl}/confirmation-sign-up`, {
        email,
        code,
      })
  }
 
 
}
