import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private messageService:MessageService
  ) {}

  UserLogin: FormGroup;
  submitted = false;

  ngOnInit() {
    this.UserLogin = this.fb.group({
      Email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      Password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.UserLogin.invalid) {
      return;
    }

    this.auth
      .login(this.UserLogin.value.Email, this.UserLogin.value.Password)
      .subscribe(data1 => {

        if( data1.message == "Invalid Password")
        {
          alert(data1.message);
        }
        else if( data1.message ==  "Email Not Registered")
        {
          // alert(data1.message);
          console.log(data1.message);
          this.messageService.add({
            severity: "success",
            detail: data1.message
          });
          
        }
        else if (data1.userInfo != null && data1.message == "Logged In Successfully") {

          console.log(data1);
          if (data1.userInfo.active === true) {
            console.log(data1.token);
            this.auth.storeUserData(
              data1.token,
              data1.userInfo.email,
              data1.userInfo.role
            );
            localStorage.setItem("lid", data1.userInfo.id);
            alert(data1.message);
            if (data1.userInfo.role === 1) {
              this.router.navigateByUrl("/admin-dashboard/adashboard");
            } else if (data1.userInfo.role === 2) {
              this.router.navigateByUrl("/trainer-dashboard/tdashboard");
            } else if (data1.userInfo.role == 3) {
              this.router.navigateByUrl("/user-dashboard/udashboard");
            } else {
              console.log("Invalid User");
            }
          } else {
            alert("Account Blocked By Admin");
          }
        }
      });
  }
}
