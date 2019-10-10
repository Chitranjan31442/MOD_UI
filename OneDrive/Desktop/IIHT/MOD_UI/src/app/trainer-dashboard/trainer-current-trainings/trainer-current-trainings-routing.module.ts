import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerCurrentTrainingsComponent } from './trainer-current-trainings.component';


const routes: Routes = [
  {path:'',component:TrainerCurrentTrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerCurrentTrainingsRoutingModule { }
