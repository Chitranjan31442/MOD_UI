import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedTrainingsInfoComponent } from './completed-trainings-info.component';


const routes: Routes = [
  {path:'',component:CompletedTrainingsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedTrainingsInfoRoutingModule { }
