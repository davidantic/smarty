import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActivityDetailComponent } from './course-activity-detail.component';

describe('CourseActivityDetailComponent', () => {
  let component: CourseActivityDetailComponent;
  let fixture: ComponentFixture<CourseActivityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseActivityDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
