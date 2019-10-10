import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import * as moment from "moment";
@Component({
  selector: "app-confirm-request",
  templateUrl: "./confirm-request.component.html",
  styleUrls: ["./confirm-request.component.css"]
})
export class ConfirmRequestComponent implements OnInit {
  paramId: number;
  trainerTechnology: string;
  trainerData: any;
  skillData: any;
  skill: any;
  showRequestedCourse: any;
  userData: any;

  timeSlot: string;
  startDate: Date;
  endDate: Date;

  checkStartDate: Date;
  checkEndDate: Date;
  // userName: string;
  // email: string;
  // name: string;
  // fees: string;
  // prerequisites: string;
  // yourName: string;
  request: Boolean;
  requestSent: any;
  lid: any;
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.getParamData();
    this.getById();
    this.getTech();
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);

    this.auth.getUserById(this.lid).subscribe(data => {
      this.userData = data;
    });
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      let pid = params["id"];
      this.paramId = +pid;
      this.trainerTechnology = params["trainerTechnology"];
      console.log("param id " + this.paramId);
    });
  }

  getById() {
    this.auth.getUserById(this.paramId).subscribe(data => {
      this.trainerData = data;
      console.log("trainber data ");
      console.log(this.trainerData);
    });
  }

  getTech() {
    this.auth.getAllSkills().subscribe(data => {
      this.skill = data;
      this.skillData = _.findWhere(this.skill, {
        name: this.trainerTechnology
      });

      console.log("skill id " + this.skillData.id);
    });
  }

  onSave() {
    let checkDate1 = moment(this.startDate).format("DD-MM-YYYY");

    let checkDate2 = moment(this.endDate).format("DD-MM-YYYY");

    function compare(Date1, Date2) {
      var momentA = moment(Date1, "DD/MM/YYYY");
      var momentB = moment(Date2, "DD/MM/YYYY");
      if (momentA > momentB) return 1;
      else if (momentA < momentB) return -1;
      else return 0;
    }

    let dateNum = compare(checkDate1, checkDate2);

    if (dateNum == 1) {
      alert("End date should be greater than start date");
    } else if (dateNum == 0) {
      alert("Start date and End date same");
    } else {

      let data = {
        timeSlot: this.timeSlot,
        startDate: this.startDate,
        endDate: this.endDate,
        fees: this.skillData.fees,
        skillId: this.skillData.id,
        skillname: this.skillData.name,
        userId: this.userData.id,
        userName: this.userData.userName,
        mentorId: this.trainerData.id,
        mentorName: this.trainerData.userName,
        email: this.trainerData.email,
        accept: false,
        rejectNotify: false,
        trainingPaymentStatus: false,
        ratings: 0
      };

      this.auth.saveTraining(data).subscribe(data => {
        console.log(data);
        alert("Request Sent Check Notification");
      });
      // }
      // }
    }
  }
}
