import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private jwtHelper : JwtHelperService) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://localhost:8080/authenticate/login`, {
      email,
      password,
    });
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log(this.jwtHelper.decodeToken(token!))
    return token !== null ? token : null;
  }
  
  getRole(): string | null{
    const token = localStorage.getItem('token');
    const decoded = this.jwtHelper.decodeToken(token!)
    return decoded.role
  }

}
