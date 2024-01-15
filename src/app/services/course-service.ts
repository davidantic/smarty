import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Course } from '../models/course';
import { AuthService } from '../auth/auth.service';

const token = localStorage.getItem('token')
const headers = new HttpHeaders()
.set('Authorization', `Bearer ${token}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:8080/api/courses';
  private professorApiUrl = 'http://localhost:8080/api/engagements';

  constructor(private http: HttpClient) { }

  fetchCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {'headers':headers});
  }

  fetchEngagements():Observable<any>{
    return this.http.get<any>(this.professorApiUrl, {headers})
  }

  
}
