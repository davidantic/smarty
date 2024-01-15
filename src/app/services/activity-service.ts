import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const headers = new HttpHeaders()
.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:8080/api/activities';

  constructor(private http: HttpClient) { }

  fetchActivities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createActivity(ActivityData: any) {
    return this.http.post(this.apiUrl, ActivityData, {headers});
    }

  fetchActivitesByCourseAndStudent(course: string, studentId: number): Observable<any>{
    return this.http.get<any>(this.apiUrl + `/by-course-of-student/${studentId}?code=${course}`, {headers});
  }
}
