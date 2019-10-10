import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerPaymentsComponent } from './trainer-payments.component';


const routes: Routes = [
  {path:'',component:TrainerPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerPaymentsRoutingModule { }
