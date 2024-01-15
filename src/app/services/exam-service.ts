import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { Exam } from '../models/course';

const token = localStorage.getItem('token')
const headers = new HttpHeaders()
.set('Authorization', `Bearer ${token}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = 'http://localhost:8080/api/exams';

  constructor(private http: HttpClient) { }

  fetchExams(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createExam(ExamData: any) {
    return this.http.post(this.apiUrl, ExamData, {headers});
    }

  fetchExamByStudentId(studentId: number){
    return this.http.get<any>(this.apiUrl + `/by-student/${studentId}`, {headers})
  }

  fetchExamsByCourseId(courseId: number){
    return this.http.get<any>(this.apiUrl + `/by-course/${courseId}`, {headers})
  }
}
