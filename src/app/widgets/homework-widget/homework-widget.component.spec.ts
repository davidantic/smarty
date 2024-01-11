import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkWidgetComponent } from './homework-widget.component';

describe('HomeworkWidgetComponent', () => {
  let component: HomeworkWidgetComponent;
  let fixture: ComponentFixture<HomeworkWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
