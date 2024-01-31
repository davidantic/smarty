import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { ExamService } from 'src/app/services/exam-service';

@Component({
  selector: 'app-exams-form',
  templateUrl: './exams-form.component.html',
  styleUrls: ['./exams-form.component.css']
})
export class ExamsFormComponent {
  myForm: FormGroup;
  studentOptions: any[] = [];
  courseOptions: any[] = [];
  courseId = this.route.snapshot.paramMap.get('id');

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private accountService: AccountService, private examService: ExamService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchAllStudent();
    this.buildForm()
  }

  fetchAllStudent() {
    this.accountService.getAllStudents().subscribe(data => {
      this.studentOptions = data.content;
    })
  }

  submitForm() {
    //console.log(this.myForm.value);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.examService.createExam(this.myForm.value).subscribe(success => {
        window.alert("Exam successfully added!")
      })
    } else {
      console.log(this.myForm.value);
    }
  }

  buildForm(): void {
    this.myForm = this.formBuilder.group({
      comment: [''],
      examinationPeriod: ['', Validators.required],
      dateOfExamination: ['', Validators.required],
      points: ['', Validators.required],
      courseId: [this.courseId, Validators.required],
      studentId: ['', Validators.required]
    });
  }
}