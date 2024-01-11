import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accountService.getUser().subscribe(response=>{
      console.log(response)
    })
  }
}
