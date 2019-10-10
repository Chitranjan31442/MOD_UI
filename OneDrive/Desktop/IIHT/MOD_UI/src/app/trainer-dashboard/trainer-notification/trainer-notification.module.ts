import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerNotificationRoutingModule } from './trainer-notification-routing.module';
import { TrainerNotificationComponent } from './trainer-notification.component';


@NgModule({
  declarations: [
    TrainerNotificationComponent
  ],
  imports: [
    CommonModule,
    TrainerNotificationRoutingModule
  ]
})
export class TrainerNotificationModule { }


