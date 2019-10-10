import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTrainingsInfoComponent } from './current-trainings-info.component';


const routes: Routes = [
  {path:'',component:CurrentTrainingsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentTrainingsInfoRoutingModule { }
