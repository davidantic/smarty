import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `  
  <div class="row gx-0" style="height: 100vh;">
    <div class="col-sm-2 col-md-6 col-lg-2"><app-side-nav *ngIf="showMenu"></app-side-nav></div>
    <div class="col-sm-10 col-md-6 col-lg-10" style="background-color: #F3F4F5;"><app-header *ngIf="showMenu"></app-header><router-outlet></router-outlet></div>
  </div>
  `
})
export class AppComponent {
  title = 'Smarty-Front';
  showMenu = true;

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        if (currentRoute === '/login') {
          this.showMenu = false
        } else {
          this.showMenu = true
        }
      }
    });
  }
}

