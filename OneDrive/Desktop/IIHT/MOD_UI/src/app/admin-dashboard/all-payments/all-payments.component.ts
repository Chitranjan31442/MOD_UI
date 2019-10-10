import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

import * as _ from "underscore";
import { Router } from '@angular/router';

@Component({
  selector: "app-all-payments",
  templateUrl: "./all-payments.component.html",
  styleUrls: ["./all-payments.component.css"]
})
export class AllPaymentsComponent implements OnInit {
  constructor(private auth: AuthService,private router:Router) {}

  payment: any;
  userPayment: any;
  mentorPayment: any;
  allRegistered: any;
  users: any;
  trainer: any;
  resultArray: [] = [];

  changeCommision:number;
  changetrainerFees:number;

  ngOnInit() {
    this.getAllPayment();
  }

  getAllPayment() {
    this.auth.getAllPayment().subscribe(data => {
      this.payment = data;
      this.userPayment = _.where(this.payment, { paymentStatus: true });
    });
  }

  moveToEdit(id) {
    let data = {
      id: id
    };
    this.router.navigate(["admin-dashboard/edit-payment-commision"], {
      queryParams: data
    });
  }
}
