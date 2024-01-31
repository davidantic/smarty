import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const token = localStorage.getItem('token')
const headers = new HttpHeaders()
  .set('Authorization', `Bearer ${token}`)
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:8080/api/v1/reports';

  constructor(private http: HttpClient) { }

  fetchReports(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers });
  }

  createReport(ReportData: any) {
    return this.http.post(this.apiUrl, ReportData, { headers });
  }
}