import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPaymentsComponent } from './all-payments.component';


const routes: Routes = [
  {path:'',component:AllPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPaymentsRoutingModule { }
