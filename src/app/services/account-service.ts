import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth/auth.service';

const headers = new HttpHeaders()
.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrlStudent = 'http://localhost:8080/api/students/by-email';
  private apiUrlProfessor = 'http://localhost:8080/api/professors/by-email';
  

  constructor(private http: HttpClient, private authService: AuthService, private jwtHelper: JwtHelperService) { }

  getUser(){
    console.log(this.authService.getRole())
    const decoded = this.jwtHelper.decodeToken(this.authService.getToken()!);
    if(this.authService.getRole() === 'ROLE_STUDENT'){
      return this.http.get<any>(this.apiUrlStudent + `?email=${decoded.username}`, {headers});
    }else{
      return this.http.get<any>(this.apiUrlProfessor+ `?email=${decoded.username}`, {headers});
    }
  }

  getAllStudents(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/students', {headers});
  }

}
