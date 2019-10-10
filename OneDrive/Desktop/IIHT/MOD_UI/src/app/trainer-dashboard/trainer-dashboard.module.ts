import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerDashboardRoutingModule } from './trainer-dashboard-routing.module';
import { TrainerDashboardComponent } from './trainer-dashboard.component';
import { TrainerNavbarComponent } from './trainer-navbar/trainer-navbar.component';

@NgModule({
  declarations: [TrainerDashboardComponent, TrainerNavbarComponent],
  imports: [
    CommonModule,
    TrainerDashboardRoutingModule
  ]
})
export class TrainerDashboardModule { }
