import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-completed-trainings",
  templateUrl: "./completed-trainings.component.html",
  styleUrls: ["./completed-trainings.component.css"]
})
export class CompletedTrainingsComponent implements OnInit {
  compT: any;
  compT1: any;
  lid: number;
  model: any;
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
        userId: this.lid
      });
      console.log(this.compT);
    });
  }

  giveRatings(id) {
    this.auth.getTrainingById(id).subscribe(data => {
      this.model = data;
      console.log(this.model);
    });
  }

  uodateRatings(id) {
    this.auth
      .updateTrainingRatings(id, this.model.rating)
      .subscribe(data => {
        console.log("updated");
        this.getCurrentTraining();
      });
  }
}
