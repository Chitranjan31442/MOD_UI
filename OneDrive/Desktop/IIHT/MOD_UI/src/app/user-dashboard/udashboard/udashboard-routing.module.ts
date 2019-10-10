import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UdashboardComponent } from './udashboard.component';


const routes: Routes = [
  { path: '', component: UdashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdashboardRoutingModule { }
