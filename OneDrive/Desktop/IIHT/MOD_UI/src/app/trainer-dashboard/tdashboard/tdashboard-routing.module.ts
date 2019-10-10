import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdashboardComponent } from './tdashboard.component';


const routes: Routes = [
  {path:'',component:TdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdashboardRoutingModule { }
