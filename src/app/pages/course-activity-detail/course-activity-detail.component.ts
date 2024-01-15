import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity-service';

@Component({
  selector: 'app-course-activity-detail',
  templateUrl: './course-activity-detail.component.html',
  styleUrls: ['./course-activity-detail.component.css']
})
export class CourseActivityDetailComponent {

  activites: Activity[];

  constructor(private route : ActivatedRoute, private activityService: ActivityService){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    const course = this.route.snapshot.paramMap.get('code')!;
    this.activityService.fetchActivitesByCourseAndStudent(course, Number(id)).subscribe(data=>{
      this.activites = data
    })
  }



}
