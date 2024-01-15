import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsWidgetComponent } from './exams-widget.component';

describe('ExamsWidgetComponent', () => {
  let component: ExamsWidgetComponent;
  let fixture: ComponentFixture<ExamsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
