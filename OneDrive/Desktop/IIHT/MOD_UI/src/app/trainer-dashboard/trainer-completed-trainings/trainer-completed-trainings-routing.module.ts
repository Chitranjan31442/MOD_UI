import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerCompletedTrainingsComponent } from './trainer-completed-trainings.component';


const routes: Routes = [
  {path:'',component:TrainerCompletedTrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerCompletedTrainingsRoutingModule { }
