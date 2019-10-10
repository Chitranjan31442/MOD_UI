import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-completed-trainings-info',
  templateUrl: './completed-trainings-info.component.html',
  styleUrls: ['./completed-trainings-info.component.css']
})
export class CompletedTrainingsInfoComponent implements OnInit {


  compT: any;
  compT1:any
  constructor( private auth: AuthService) {}

  ngOnInit() {
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTraining().subscribe(data => {
      this.compT1 = data;
      this.compT = _.where(this.compT1, { status: "completed" });
      console.log(this.compT);
    });
  }

}
