import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrlStudent = 'http://localhost:8080/api/students';
  private apiUrlProfessor = 'http://localhost:8080/api/professors';
  

  constructor(private http: HttpClient, private authService: AuthService) { }

  // fetchAccount(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  getUser(){
    console.log(this.authService.getRole())
    if(this.authService.getRole() === 'ROLE_STUDENT'){
      return this.http.get<any>(this.apiUrlStudent);
    }else{
      return this.http.get<any>(this.apiUrlProfessor);
    }
    
  }

}
