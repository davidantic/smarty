import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Exam } from 'src/app/models/exam';
import { AccountService } from 'src/app/services/account-service';
import { ActivityService } from 'src/app/services/activity-service';
import { ExamService } from 'src/app/services/exam-service';

@Component({
  selector: 'app-course-exam-details',
  templateUrl: './course-exam-details.component.html',
  styleUrls: ['./course-exam-details.component.css']
})
export class CourseExamDetailsComponent {
  exams : Exam[] = {} as Exam[]
  role = ''

  constructor(private examService : ExamService, private accountService: AccountService, private authService: AuthService, private route : ActivatedRoute){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    const course = this.route.snapshot.paramMap.get('code')!;
    this.examService.fetchExamsByCourseId(Number(id)).subscribe(data=>{
      this.exams = data
    })
  }
}
