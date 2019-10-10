import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmRequestComponent } from './confirm-request.component';


const routes: Routes = [
  {path:'', component:ConfirmRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmRequestRoutingModule { }
