import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNotificationRoutingModule } from './user-notification-routing.module';
import { UserNotificationComponent } from './user-notification.component';


@NgModule({
  declarations: [UserNotificationComponent],
  imports: [
    CommonModule,
    UserNotificationRoutingModule
  ]
})
export class UserNotificationModule { }
