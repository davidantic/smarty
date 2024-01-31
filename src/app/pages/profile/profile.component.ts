import { Component } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Student } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  student: Student;
  professor: Professor;
  role: String;
  averageGrade: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.accountService.getUser().subscribe(response => {
      this.role = response.account.role
      if (this.role === "PROFESSOR" || this.role === "ASSISTANT") {
        this.professor = response
      } else {
        this.student = response;
        this.accountService.getAverageGrade(this.student.id).subscribe(data => {
          this.averageGrade = data['student\'s GPA']
        })
      }
    })
  }
}