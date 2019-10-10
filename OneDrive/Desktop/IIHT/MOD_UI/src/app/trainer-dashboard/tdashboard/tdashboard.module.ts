import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdashboardRoutingModule } from './tdashboard-routing.module';
import { TdashboardComponent } from './tdashboard.component';


@NgModule({
  declarations: [TdashboardComponent],
  imports: [
    CommonModule,
    TdashboardRoutingModule
  ]
})
export class TdashboardModule { }
