import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-trainer-edit-profile",
  templateUrl: "./trainer-edit-profile.component.html",
  styleUrls: ["./trainer-edit-profile.component.css"]
})
export class TrainerEditProfileComponent implements OnInit {
  paramId: number;
  model: any;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getParamData();
    this.getById();
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      let pid = params["id"];
      this.paramId = +pid;
      console.log("param id " + this.paramId);
    });
  }

  getById() {
    this.auth.getUserById(this.paramId).subscribe(data => {
      this.model = data;
    });
  }

  onSubmit() {
    this.auth
      .updateTrainerProfileById(this.paramId, this.model)
      .subscribe(data => {
        alert("updated");
        this.router.navigateByUrl("trainer-dashboard/trainer-profile");
      });
  }
}
