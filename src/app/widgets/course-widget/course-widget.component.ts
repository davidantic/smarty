import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { AccountService } from 'src/app/services/account-service';
import { CourseService } from 'src/app/services/course-service';

@Component({
  selector: 'app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.css']
})
export class CourseWidgetComponent {
  courses: Course[] = []
  fetchedArray: any[] = []

  constructor(private api : CourseService, private accountService: AccountService) { 
  }

  ngOnInit(): void{
    this.fetchEngagements();
  }

fetchCourses(){
  this.api.fetchCourses().subscribe(data=>{
    this.courses = data.content
  })
}

fetchEngagements() {
  this.accountService.getUser().subscribe(user => {
    const professorId = user.id;
    this.api.fetchEngagements().subscribe(data => {
      this.fetchedArray = data.content.filter((engagement: { professor: { id: any; }; }) => engagement.professor.id === professorId);
      this.courses = this.fetchedArray.map(engagement => engagement.course);
    });
  });
}

}
