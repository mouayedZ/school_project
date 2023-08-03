import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css']
})
export class SearchNoteComponent implements OnInit {
  title: string="search teacher";
  obj:any={};
  searchNote: FormGroup;
  searchTab:any=[];
  errorMsg:any;
  constructor(private evaluationServices :EvaluationService) { }

  ngOnInit() {
   
  }
  searchByPhoneNumber(){
    console.log("here value of your search",this.obj.childNumber);
    let connectedTab = JSON.parse(localStorage.getItem('connectedUser') ); 
    if (this.obj.childNumber==connectedTab[0].telChild) {
      this.evaluationServices.getNotesByTel(this.obj.childNumber).subscribe((response)=>{

this.searchTab = response.notes
console.log('here tabs note',this.searchTab)
})
    }
    else {
this.errorMsg="the number of child is not correct"
    }

  }


}
