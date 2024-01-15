import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const token = localStorage.getItem('token')
const headers = new HttpHeaders()
.set('Authorization', `Bearer ${token}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasksByCourseId(courseId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/tasks/by-course/${courseId}`, {headers});
  }
}
