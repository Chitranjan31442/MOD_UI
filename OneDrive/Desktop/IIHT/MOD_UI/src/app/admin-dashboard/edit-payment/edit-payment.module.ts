import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPaymentRoutingModule } from './edit-payment-routing.module';
import { EditPaymentComponent } from './edit-payment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditPaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditPaymentRoutingModule
  ]
})
export class EditPaymentModule { }
