import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() x:any;
  constructor(private router :Router) { }

  ngOnInit() {
  }
  display(x: number) {
    this.router.navigate([`courseInfo/${x}`]);
  }

}
