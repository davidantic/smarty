import { Component } from '@angular/core';
import { faBorderAll, faClock, faFolderBlank, faChartColumn, faUser,  faRightFromBracket, faClipboard, faEnvelope, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  homeIcon = faBorderAll;
  taskIcon = faClock;
  courseIcon = faFolderBlank;
  statisticsIcon = faChartColumn;
  profileIcon = faUser;
  logOutIcon = faRightFromBracket;
  reportIcon = faClipboard;
  envelopeIcon = faEnvelope;
  examIcon = faListNumeric;

  role = ""

  constructor(private authService : AuthService){}

  ngOnInit(){
    if(this.authService.getRole() == "ROLE_PROFESSOR"){
      this.role = "PROFESSOR"
    } else if(this.authService.getRole() == "ROLE_STUDENT"){
      this.role = "STUDENT"
    }else if (this.authService.getRole() == "ROLE_ASSISTANT"){
      this.role = "ASSISTANT"
    }
  }
}
