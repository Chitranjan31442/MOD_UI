import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from 'underscore';

@Component({
  selector: "app-payment-info",
  templateUrl: "./payment-info.component.html",
  styleUrls: ["./payment-info.component.css"]
})
export class PaymentInfoComponent implements OnInit {
  paymentSuccess: any;
  paymentFoundData : any;
  lid: number;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);
    this.getPaymentData();
  }

  getPaymentData() {
    this.auth.getAllPayment().subscribe(data => {
      this.paymentFoundData = data;
      this.paymentSuccess = _.where(this.paymentFoundData,{userId:this.lid})
      console.log(this.paymentSuccess);
    });
  }
}
