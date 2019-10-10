import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminDashboardRoutingModule } from "./admin-dashboard-routing.module";
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
@NgModule({
  declarations: [
   AdminDashboardComponent,
   AdminNavbarComponent
  ],
  imports: [CommonModule, AdminDashboardRoutingModule]
})
export class AdminDashboardModule {}
