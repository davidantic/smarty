import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivtyService {

  private apiUrl = 'http://localhost:8080/api/activites';

  constructor(private http: HttpClient) { }

  fetchActivities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  
}
