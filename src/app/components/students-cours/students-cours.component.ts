import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AffectationService } from 'src/app/services/affectation.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-students-cours',
  templateUrl: './students-cours.component.html',
  styleUrls: ['./students-cours.component.css']
})
export class StudentsCoursComponent implements OnInit {
  courseId: any;
  findedCourse: any = [];
  foundedd: any = [];
  boucleTab: any = [];
errorMsg:any;
  studentsTab: any = [];
  foundedStudent: any = [];
  addNoteForm:FormGroup;
  constructor(private studentsServices: StudentService,
    private affectationServices: AffectationService,
    private usersServices: UserService,
    private activatedRoute: ActivatedRoute , 
    private x : FormBuilder,
    private evaluationServices : EvaluationService) { }

  ngOnInit() {

    this.studentsServices.getAllStudent().subscribe((response) => {
      this.studentsTab = response.students;

    });
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('here value of course ID', this.courseId);
    this.affectationServices.getStudentByCourse(this.courseId).subscribe((response) => {
      this.findedCourse = response.affectation;

      console.log('here affectation value', this.findedCourse);
      console.log('here student value', this.studentsTab);

    });
    this.serarch();
    this.addNoteForm = this.x.group ({
      note : ["",[Validators.required ,]],
      evaluation : ["",[Validators.required , ]],
      

    });

  }
  serarch() {
    this.studentsServices.getAllStudent().subscribe((response) => {
      let tab = response.students;
      let k = 0;
      for (let j = 0; j < tab.length; j++) {
        for (let i = 0; i < this.findedCourse.length; i++) {
          if (this.studentsTab[j]._id == this.findedCourse[i].studentId) {
            this.foundedd.push(this.studentsTab[j]);
            k++;
          }
        }
      }
      console.log("fdfdfxxxx", this.foundedd);

    });
  }
  addNote(id , tel, firstN , lastN){
    console.log('here add note value',this.addNoteForm.value);
    this.addNoteForm.value.idCourse = this.courseId;
    this.addNoteForm.value.idStudent = id;
    this.addNoteForm.value.firstName = firstN;
    this.addNoteForm.value.lastName = lastN;
    this.addNoteForm.value.tel = tel;

this.evaluationServices.addEvaluation( this.addNoteForm.value).subscribe((response)=>{
  if (response.msg=="note is already exist") {
    console.log('note is already exist');
    this.errorMsg=' number is exist '
  } else{
    console.log("add with succes");
  }
})
  }

}
