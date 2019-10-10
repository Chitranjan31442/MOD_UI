import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdashboardComponent } from './adashboard.component';


const routes: Routes = [
  {path:'',component:AdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdashboardRoutingModule { }
