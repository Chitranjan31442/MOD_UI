import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AllPaymentsRoutingModule } from './all-payments-routing.module';
import { AllPaymentsComponent } from './all-payments.component';


@NgModule({
  declarations: [AllPaymentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AllPaymentsRoutingModule
  ]
})
export class AllPaymentsModule { }
