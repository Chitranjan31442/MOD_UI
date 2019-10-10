import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerCompletedTrainingsRoutingModule } from './trainer-completed-trainings-routing.module';
import { TrainerCompletedTrainingsComponent } from './trainer-completed-trainings.component';


@NgModule({
  declarations: [TrainerCompletedTrainingsComponent],
  imports: [
    CommonModule,
    TrainerCompletedTrainingsRoutingModule
  ]
})
export class TrainerCompletedTrainingsModule { }
