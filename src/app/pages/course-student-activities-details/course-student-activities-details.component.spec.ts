import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentActivitiesDetailsComponent } from './course-student-activities-details.component';

describe('CourseStudentActivitiesDetailsComponent', () => {
  let component: CourseStudentActivitiesDetailsComponent;
  let fixture: ComponentFixture<CourseStudentActivitiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStudentActivitiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStudentActivitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
