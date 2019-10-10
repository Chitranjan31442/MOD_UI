import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNotificationComponent } from './user-notification.component';


const routes: Routes = [
  {path:'',component:UserNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotificationRoutingModule { }
