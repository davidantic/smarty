import { Component } from '@angular/core';
import { faBell, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bellIcon = faBell;
  glassIcon = faMagnifyingGlass;
  user: any;
  role = ""

  constructor(private authService : AuthService, private accService: AccountService){}

  ngOnInit(){
    if(this.authService.getRole() == "ROLE_PROFESSOR"){
      this.role = "PROFESSOR"
    } else if(this.authService.getRole() == "ROLE_STUDENT"){
      this.role = "STUDENT"
    }else if (this.authService.getRole() == "ROLE_ASSISTANT"){
      this.role = "ASSISTANT"
    }
  
    this.accService.getUser().subscribe(data =>{
      this.user = data
    })

  }



}
