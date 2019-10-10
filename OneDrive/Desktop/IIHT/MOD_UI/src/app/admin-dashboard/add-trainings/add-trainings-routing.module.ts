import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainingsComponent } from './add-trainings.component';


const routes: Routes = [
  {path:'',component:AddTrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTrainingsRoutingModule { }
