import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lid: number;
  role: number;
  userData: any;

  constructor(private router:Router,private auth: AuthService) { }

  ngOnInit() {
    let localid = localStorage.getItem("lid");
    this.lid = +localid;
    console.log(this.lid);
    this.auth.getUserById(this.lid).subscribe(data =>
    {
      this.userData = data;
    });
  }

   
  notification()
  {
    if (this.userData.role === 1) {
      alert("No Notification Available.")
    } else if (this.userData.role === 2) {
      this.router.navigateByUrl("/trainer-dashboard/trainer-notification");
    } else if (this.userData.role == 3) {
      this.router.navigateByUrl("/user-dashboard/user-notification");
    } else {
      console.log("Invalid User");
    }

    
  }


  logout()
  {
    localStorage.clear();
  this.router.navigate(['home']);
  alert("Logged Out Successfully.");
  }


}
