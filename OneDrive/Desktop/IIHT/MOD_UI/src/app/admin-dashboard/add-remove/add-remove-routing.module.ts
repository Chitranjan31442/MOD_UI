import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRemoveComponent } from './add-remove.component';


const routes: Routes = [
  {path:'',component:AddRemoveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRemoveRoutingModule { }
