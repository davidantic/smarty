import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email!: string;
  password!: string;
  submitted = false;
  isInvalid: boolean = false;
  formGroup: FormGroup;


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  
  constructor(private authService: AuthService, private router : Router) { }


  login(): void {
    this.submitted = true;
    let emailValue = this.formGroup.controls?.['email']?.value;
    console.log(String(emailValue))
    console.log(emailValue)
    let passwordValue = this.formGroup.controls?.['password']?.value;
    this.authService.login(String(emailValue), passwordValue).subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem('token', response.accessToken);
        console.log('Login successful');
        this.router.navigate(['/dashboard'])
        .then(() => {
          location.reload();
        });
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
