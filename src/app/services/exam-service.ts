import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { Exam } from '../models/course';

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
    return this.http.post(this.apiUrl, ExamData);
    }
}
