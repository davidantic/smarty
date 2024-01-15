import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course-service';
import { faPenToSquare, faListDots } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/services/account-service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = []
  fetchedArray : any[] = []
  role: String = "";
  viewIcon = faPenToSquare;
  listIcon = faListDots;
  studentId = 0;

  constructor(private api : CourseService, private accountService: AccountService, private authService: AuthService) { 
  }

  ngOnInit(): void{
    if(this.authService.getRole() == "ROLE_PROFESSOR"){
      this.role = "PROFESSOR"
      this.fetchEngagements();
    } else if(this.authService.getRole() == "ROLE_STUDENT"){
      this.role = "STUDENT"
      this.accountService.getUser().subscribe(user => {
        this.studentId = user.id;})
      this.fetchStudentCourses();
    }else if (this.authService.getRole() == "ROLE_ASSISTANT"){
      this.role = "ASSISTANT"
      this.fetchEngagements();
    }
    
  }

fetchCourses(){
  this.api.fetchCourses().subscribe(data=>{
    this.courses = data.content
  })
}

fetchStudentCourses(){
  this.accountService.getUser().subscribe(user => {
    const studentId = user.id;
  this.api.fetchCoursesByStudentId(studentId).subscribe(data =>{
      this.courses = data
  })});
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
