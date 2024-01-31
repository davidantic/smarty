import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { Course } from 'src/app/models/course';
import { ActivityService } from 'src/app/services/activity-service';
import { CourseService } from 'src/app/services/course-service';

@Component({
  selector: 'app-course-activities-by-student',
  templateUrl: './course-activities-by-student.component.html',
  styleUrls: ['./course-activities-by-student.component.css']
})
export class CourseActivitiesByStudentComponent implements OnInit {
  activities: Activity[];
  course: Course = {} as Course;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('studentId');
    const courseId = this.route.snapshot.paramMap.get('courseId')!;
    this.courseService.fetchCourseById(Number(courseId)).subscribe(
      response => {
        this.course = response;
        console.warn(response)
        this.activityService.fetchActivitesByCourseAndStudent(this.course.code, Number(id)).subscribe(
          data => {
            this.activities = data;
          }

        );
      },);
  }
}
