import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerRegisterComponent } from './trainer-register.component';


const routes: Routes = [
  {  path: '',
  component: TrainerRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRegisterRoutingModule { }
