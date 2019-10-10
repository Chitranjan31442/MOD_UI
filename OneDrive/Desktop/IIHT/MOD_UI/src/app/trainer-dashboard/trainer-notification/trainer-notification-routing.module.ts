import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerNotificationComponent } from './trainer-notification.component';


const routes: Routes = [
  {path:'',component:TrainerNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerNotificationRoutingModule { }
