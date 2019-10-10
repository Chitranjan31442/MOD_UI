import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";

@Component({
  selector: "app-trainer-completed-trainings",
  templateUrl: "./trainer-completed-trainings.component.html",
  styleUrls: ["./trainer-completed-trainings.component.css"]
})
export class TrainerCompletedTrainingsComponent implements OnInit {
  compT: any;
  compT1: any;
  lid: number;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");
    this.lid = +localid;
    console.log(this.lid);
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTraining().subscribe(data => {
      this.compT1 = data;
      this.compT = _.where(this.compT1, {
        status: "completed",
        trainerId: this.lid
      });
      console.log(this.compT);
    });
  }
}
