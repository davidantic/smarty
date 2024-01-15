import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Exam } from 'src/app/models/exam';
import { AccountService } from 'src/app/services/account-service';
import { ExamService } from 'src/app/services/exam-service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {
  exams : Exam[] = {} as Exam[]
  role = ''

  constructor(private examService : ExamService, private accountService: AccountService, private authService: AuthService){}

  ngOnInit(){
   this.fetchExamsForStudent()
  }
  fetchExamsForStudent(){
    this.accountService.getUser().subscribe(data =>{
      this.examService.fetchExamByStudentId(data.id).subscribe(response =>{
       console.warn(response)
       this.exams = response
      })
    })
  }

}
