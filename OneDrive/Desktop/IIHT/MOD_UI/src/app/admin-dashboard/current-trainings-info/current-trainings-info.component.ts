import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';
@Component({
  selector: "app-current-trainings-info",
  templateUrl: "./current-trainings-info.component.html",
  styleUrls: ["./current-trainings-info.component.css"]
})
export class CurrentTrainingsInfoComponent implements OnInit {
  curT: any;
  curT1:any
  constructor( private auth: AuthService) {}

  ngOnInit() {
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTraining().subscribe(data => {
      this.curT1 = data;
      this.curT = _.where(this.curT1, { status: "current" });
      console.log(this.curT);
    });
  }

}