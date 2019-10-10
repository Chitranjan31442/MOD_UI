import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRequestRoutingModule } from './confirm-request-routing.module';
import { ConfirmRequestComponent } from './confirm-request.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConfirmRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmRequestRoutingModule
  ]
})
export class ConfirmRequestModule { }
