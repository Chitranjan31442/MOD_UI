import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { getSearchDataComponent } from './search-trainings.component';


const routes: Routes = [
  { path: '', component: getSearchDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class getSearchDataRoutingModule { }
