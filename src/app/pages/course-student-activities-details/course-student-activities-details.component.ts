import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { Exam } from 'src/app/models/exam';
import { Student } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account-service';
import { ExamService } from 'src/app/services/exam-service';


@Component({
  selector: 'app-course-student-activities-details',
  templateUrl: './course-student-activities-details.component.html',
  styleUrls: ['./course-student-activities-details.component.css']
})
export class CourseStudentActivitiesDetailsComponent {
  students : Student[] = {} as Student[]
  role = ''
  listIcon = faListDots;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private accountService: AccountService, private authService: AuthService, private route : ActivatedRoute){}

  ngOnInit(){
    this.accountService.getAllStudents().subscribe(data=>{
      console.log(data)
      this.students = data.content
    })
  }
}
