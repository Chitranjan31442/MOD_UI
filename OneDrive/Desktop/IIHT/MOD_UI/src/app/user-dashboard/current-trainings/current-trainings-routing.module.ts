import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTrainingsComponent } from './current-trainings.component';


const routes: Routes = [
  { path: '', component: CurrentTrainingsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentTrainingsRoutingModule { }
