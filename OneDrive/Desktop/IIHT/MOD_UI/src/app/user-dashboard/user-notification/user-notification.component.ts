import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-user-notification",
  templateUrl: "./user-notification.component.html",
  styleUrls: ["./user-notification.component.css"]
})
export class UserNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  rejectedTrainings: any;
  pendingRequest: any;
  lid: any;
  paymentSuccess: any;
  paymentData: any;
  compareStartDate: any;
  compareStartDate1: any;
  checkStartDate: Date;
  checkEndDate: Date;

  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);

    // this.auth.getAllPayment().subscribe(data => {
    //   this.paymentSuccess = data;
    //   this.paymentData = _.where(this.paymentSuccess,{userId : this.lid});
    //   console.log(this.paymentData);
    // });
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTraining().subscribe(data => {
      this.allData = data;
      this.pendingRequest = _.where(this.allData, {
        rejectNotify: false,
        accept: false,
        userId: this.lid
      });
      // console.log("pending");
      // console.log(this.pendingRequest);
      this.acceptedTrainings = _.where(this.allData, {
        rejectNotify: false,
        accept: true,
        userId: this.lid
      });

      console.log("accepted");
      console.log(this.acceptedTrainings);
      this.rejectedTrainings = _.where(this.allData, {
        rejectNotify: true,
        accept: false,
        userId: this.lid
      });

      // console.log("rejected");
      // console.log(this.rejectedTrainings);
    });
  }

  startTraining(id) {
    this.auth.getTrainingById(id).subscribe(data => {
      this.compareStartDate1 = data;

      this.checkStartDate = this.compareStartDate1.startDate;

      this.checkEndDate = this.compareStartDate1.endDate;

      let checkDate1 = moment(this.checkStartDate).format("DD-MM-YYYY");

      let checkDate2 = moment(this.checkEndDate).format("DD-MM-YYYY");

      let now = moment().format("DD-MM-YYYY");

      console.log(checkDate1);

      console.log(now);

      if (now > checkDate2) {
        alert("your request is over");
      } else {
        if (checkDate1 <= now) {
          this.auth.updateTrainingStatusById(id).subscribe(data => {
            console.log(data);
          });
          alert("you can start");
        } else {
          alert("yet to start");
        }
      }
    });

    // this.auth.changeTrainingStatus(id).subscribe(data => {
    //   console.log(data);
    // });
  }

  payment(id) {
    let data = {
      trainingId: id
    };
    this.router.navigate(["user-dashboard/payment"], {
      queryParams: data
    });
  }
}
