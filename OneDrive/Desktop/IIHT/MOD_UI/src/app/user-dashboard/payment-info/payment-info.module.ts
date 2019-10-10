import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentInfoRoutingModule } from './payment-info-routing.module';
import { PaymentInfoComponent } from './payment-info.component';


@NgModule({
  declarations: [PaymentInfoComponent],
  imports: [
    CommonModule,
    PaymentInfoRoutingModule
  ]
})
export class PaymentInfoModule { }
