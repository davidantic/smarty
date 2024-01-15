import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './basic-ui/side-nav/side-nav.component';
import { SearchComponent } from './basic-ui/search/search.component';
import { HeaderComponent } from './basic-ui/header/header.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { StudentsComponent } from './pages/students/students.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PointsComponent } from './pages/points/points.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseWidgetComponent } from './widgets/course-widget/course-widget.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeworkWidgetComponent } from './widgets/homework-widget/homework-widget.component';
import { StatisticsWidgetComponent } from './widgets/statistics-widget/statistics-widget.component';
import { CourseService } from './services/course-service';
import { ReportsListComponent } from './pages/reports-list/reports-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsFormComponent } from './pages/posts-form/posts-form.component';
import { PostWidgetComponent } from './widgets/post-widget/post-widget.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { ExamsFormComponent } from './pages/exams-form/exams-form.component';
import { PointsFormComponent } from './pages/points-form/points-form.component';
import { JwtInterceptor, JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtHelperFactory } from './auth/jwt-helper.service';
import { AuthGuard } from './auth/authguard';
import { LogoutComponent } from './pages/logout/logout.component';
import { ExamsWidgetComponent } from './widgets/exams-widget/exams-widget.component';
import { ReportWidgetComponent } from './widgets/report-widget/report-widget.component';
import { CourseActivityDetailComponent } from './pages/course-activity-detail/course-activity-detail.component';
import { CourseExamDetailsComponent } from './pages/course-exam-details/course-exam-details.component';
import { CourseStudentActivitiesDetailsComponent } from './pages/course-student-activities-details/course-student-activities-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'tasks/:id', component: TasksComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent },
  { path: 'points', component: PointsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reports-list', component: ReportsListComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts-form', component: PostsFormComponent },
  { path: 'exams/:id', component: ExamsFormComponent },
  {path:'exams', component:ExamsComponent},
  {path : 'course-activity/:id/:code', component: CourseActivityDetailComponent},
  {path : 'courses/course-exam/:id', component: CourseExamDetailsComponent}

];

export function tokenGetter() {
  return localStorage.getItem('token');
}

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
   return localStorage.getItem('token');
    },
    allowedDomains: ['http://localhost:4200'], 
 };
}

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchComponent,
    HeaderComponent,
    CalendarComponent,
    DashboardComponent,
    TasksComponent,
    StudentsComponent,
    ProfileComponent,
    StatisticsComponent,
    ReportsComponent,
    PointsComponent,
    CoursesComponent,
    CourseWidgetComponent,
    LoginComponent,
    HomeworkWidgetComponent,
    StatisticsWidgetComponent,
    ReportsListComponent,
    PostsComponent,
    PostsFormComponent,
    PostWidgetComponent,
    ExamsComponent,
    ExamsFormComponent,
    PointsFormComponent,
    LogoutComponent,
    ExamsWidgetComponent,
    ReportWidgetComponent,
    CourseActivityDetailComponent,
    CourseExamDetailsComponent,
    CourseStudentActivitiesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },})

  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
  { provide: JwtHelperService, useFactory: jwtHelperFactory },],
  bootstrap: [AppComponent]
})
export class AppModule { }
