import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerPaymentsRoutingModule } from './trainer-payments-routing.module';
import { TrainerPaymentsComponent } from './trainer-payments.component';


@NgModule({
  declarations: [TrainerPaymentsComponent],
  imports: [
    CommonModule,
    TrainerPaymentsRoutingModule
  ]
})
export class TrainerPaymentsModule { }
