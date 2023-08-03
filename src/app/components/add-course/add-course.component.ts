import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addCourseForm:FormGroup;
  teachersTab:any=[];
  titlee: string = "Add course";
  matchForm : FormGroup;
  teacherConnectedTab:any=[];
courseId:any;
course:any={};
teacherId:any;
firstName:any;
courseName:any;


findedMatch:any;
  constructor( 
    private activatedRoute: ActivatedRoute,
    private x : FormBuilder,
    private router : Router ,
    private courseService : CoursesService,
    ) { }

  ngOnInit() {
    this.addCourseForm = this.x.group({
      courseName : ["",[Validators.required,Validators.minLength(3)]],
      durationCourse : ["",[Validators.required,Validators.minLength(3)]],
      childAge : ["",[Validators.required,Validators.minLength(3)]],
      courseCpacity : ["",[Validators.required,Validators.minLength(3)]], 
      courseDescription : ["",[Validators.required,Validators.minLength(3)]],
      teacherName : [""]
      
    })
    this.teacherConnectedTab= JSON.parse(localStorage.getItem('connectedUser') || '[]');
    for (let i = 0; i < this.teacherConnectedTab.length; i++) {
     
      this.teacherId = this.teacherConnectedTab[i].id;
      break;
    }
  
    
  
    this.courseId=this.activatedRoute.snapshot.paramMap.get("id");
    // matchId existe =edit
    if (this.courseId) {

      this.titlee="edit course";
     this.courseService.getCourseById(this.courseId).subscribe((response)=>{
this.course = response.course[0] ;
this.courseName= this.course.courseName
console.log('ere course',this.course.courseName)
     });  
    }
  }
  // addCourse(){
  //  console.log('here values of course',this.addCourseForm);
  //  let teachersTab=  JSON.parse(localStorage.getItem('userToSend') || '[]');
  //  console.log('here value of connected user',teachersTab)
  //  this.courseService.addCourse(this.addCourseForm.value).subscribe((response)=>
  //  {console.log("here response after add",response);
  //  });
  // }
  
  addOrEditCourse(){
    console.log("here is aded match",this.addCourseForm.value );
   console.log("here value of course id",this.courseId)
    if (this.courseId){
      this.addCourseForm.value._id = this.course;
      this.courseService.editCourse(this.addCourseForm.value).subscribe((response)=>{
console.log("here response after edit",response)
      });
      
    } else{
      this.addCourseForm.value.teacherId =this.teacherId;
      this.courseService.addCourse(this.addCourseForm.value).subscribe((response)=>{
console.log("here response after add",response)
      });
    }
   
  }
  generateId(t) {
    let max;
    if (t.length == 0) {
        max = 0
    } else {
        max = t[0].id;
        for (let i = 0; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }



        }
    }
    return max;
}
 

}
