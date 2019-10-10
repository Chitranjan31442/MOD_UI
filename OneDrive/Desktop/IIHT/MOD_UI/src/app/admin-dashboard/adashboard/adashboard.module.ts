import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdashboardRoutingModule } from './adashboard-routing.module';
import { AdashboardComponent } from './adashboard.component';


@NgModule({
  declarations: [AdashboardComponent],
  imports: [
    CommonModule,
    AdashboardRoutingModule
  ]
})
export class AdashboardModule { }
