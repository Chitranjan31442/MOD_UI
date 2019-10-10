import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerEditProfileComponent } from './trainer-edit-profile.component';


const routes: Routes = [
  {path:'',component:TrainerEditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerEditProfileRoutingModule { }
