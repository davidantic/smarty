import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActivitiesByStudentComponent } from './course-activities-by-student.component';

describe('CourseActivitiesByStudentComponent', () => {
  let component: CourseActivitiesByStudentComponent;
  let fixture: ComponentFixture<CourseActivitiesByStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseActivitiesByStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseActivitiesByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
