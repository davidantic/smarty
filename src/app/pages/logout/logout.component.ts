import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isAuthenticated: boolean;
  logOutIcon = faRightFromBracket;
  constructor(private router: Router) {
    this.isAuthenticated = !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    .then(() => {
      location.reload();
    });
  }

  ngOnInit(): void {
  }

}
