import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { ActivityService } from 'src/app/services/activity-service';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  myForm: FormGroup;
  taskOptions: any[] = [];
  studentOptions: any[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private taskService: TaskService, private accountService: AccountService, private activityService : ActivityService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.onCourseChange(Number(id));
    this.fetchAllStudent();
    this.myForm = this.formBuilder.group({
      activityName: ['', Validators.required],
      comment: [''],
      points: ['', Validators.required],
      studentId: ['', Validators.required],
      taskId: ['', Validators.required]
    });
  }

  onCourseChange(courseId: number) {
    this.taskService.getTasksByCourseId(courseId).subscribe(data => {
      this.taskOptions = data;
    });
  }

  fetchAllStudent(){
    this.accountService.getAllStudents().subscribe(data =>{
      this.studentOptions = data.content;
    })
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.activityService.createActivity(this.myForm.value).subscribe(success =>{
        window.alert("Activity successfully added!")
      })
    }
  }
  
}
