import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course-service';

@Component({
  selector: 'app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.css']
})
export class CourseWidgetComponent {
  courses: Course[] = []

  constructor(private api : CourseService) { 
  }

  ngOnInit(): void{
    this.fetchCourses();
  }

fetchCourses(){
  this.api.fetchCourses().subscribe(data=>{
    this.courses = data.content
  })
}
}
