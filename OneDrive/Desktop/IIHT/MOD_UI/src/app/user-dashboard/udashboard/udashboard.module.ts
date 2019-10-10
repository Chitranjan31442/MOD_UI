import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UdashboardRoutingModule } from './udashboard-routing.module';
import { UdashboardComponent } from './udashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UdashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UdashboardRoutingModule
  ]
})
export class UdashboardModule { }
