import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedTrainingsComponent } from './completed-trainings.component';


const routes: Routes = [
  { path: '', component: CompletedTrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedTrainingsRoutingModule { }
