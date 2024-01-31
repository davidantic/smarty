import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Exam } from 'src/app/models/exam';
import { AccountService } from 'src/app/services/account-service';
import { ExamService } from 'src/app/services/exam-service';

@Component({
  selector: 'app-exams-widget',
  templateUrl: './exams-widget.component.html',
  styleUrls: ['./exams-widget.component.css']
})
export class ExamsWidgetComponent {
  exams : Exam[] = {} as Exam[]
  role = ''

  constructor(private examService : ExamService, private accountService: AccountService, private authService: AuthService){}


  ngOnInit(){
    if(this.authService.getRole() == "ROLE_PROFESSOR"){
      this.role = "PROFESSOR"
      this.fetchExamsForProfessor()
    } else if(this.authService.getRole() == "ROLE_STUDENT"){
      this.role = "STUDENT"
      this.fetchExamsForStudent()
    }else if (this.authService.getRole() == "ROLE_ASSISTANT"){
      this.role = "ASSISTANT"
      this.fetchExamsForProfessor()
    }
   
  }
  fetchExamsForStudent(){
    this.accountService.getUser().subscribe(data =>{
      this.examService.fetchExamByStudentId(data.id).subscribe(response =>{
       console.warn(response)
       this.exams = response.slice(0, 4);
      })
    })
  }

  fetchExamsForProfessor(){
    this.examService.fetchExams().subscribe(response=>{
      this.exams = response.content.slice(0, 4);
    })
  }
}
