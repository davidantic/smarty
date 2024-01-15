import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getRole() == "ROLE_PROFESSOR") {
      this.role = "PROFESSOR"
    } else if (this.authService.getRole() == "ROLE_STUDENT") {
      this.role = "STUDENT"
    } else if (this.authService.getRole() == "ROLE_ASSISTANT") {
      this.role = "ASSISTANT"
    }
  }
}

