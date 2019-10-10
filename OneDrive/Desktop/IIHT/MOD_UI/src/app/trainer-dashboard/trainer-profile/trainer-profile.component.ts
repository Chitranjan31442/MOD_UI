
import { Component, OnInit } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  id:number;
  model: any;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("hello");
    
    let lid = localStorage.getItem("lid");
    this.id = +lid;

    this.gettingUserById();
  }

  gettingUserById() {
    this.auth.getUserById(this.id).subscribe(data => {
      this.model = data;
      console.log(this.model);
    });
  }

  moveToEdit(id)
  {
    let data = {
      id: id
    };
    this.router.navigate(["trainer-dashboard/trainer-edit-profile"], {
      queryParams: data
    });
  }
    
}
