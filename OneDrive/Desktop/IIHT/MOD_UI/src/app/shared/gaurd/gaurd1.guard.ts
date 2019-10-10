import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Gaurd1Guard implements CanActivate {

  
  data: string;
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
    this.data = localStorage.getItem("role");

      if (!this.auth.isLoggedIn()) {
        return true;
      } else {
        if (this.data === "3") {
          console.log(this.data);
          this.router.navigate(["user-dashboard/udashboard"]);
          return false;
        } else if (this.data === "2") {
          console.log(this.data);
          this.router.navigate(["trainer-dashboard/tdashboard"]);
          return false;
        } else if(this.data == '3'){
          console.log(this.data);
          this.router.navigate(["admin-dashboard/adashboard"]);
          return false;
        }
        return false;
  
      }


  }
  
}
