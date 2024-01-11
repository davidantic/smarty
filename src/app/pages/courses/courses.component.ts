import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course-service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = []
  viewIcon = faPenToSquare;

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
