import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

courseId:any;
courses: any;
findedCourse:any=[];
x: any = this.findedCourse;


  constructor(private activatedRoute:ActivatedRoute ,
    private coursesService : CoursesService) { }

  ngOnInit() {
    
    
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('here course id',this.courseId)
    this.coursesService.getCourseById(this.courseId).subscribe((response) => {
      this.findedCourse = response.course;
      console.log('here tabs', response);
    });
    
  }
  }


