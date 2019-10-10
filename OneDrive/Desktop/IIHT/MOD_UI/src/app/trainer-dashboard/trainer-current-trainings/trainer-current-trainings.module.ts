import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerCurrentTrainingsRoutingModule } from './trainer-current-trainings-routing.module';
import { TrainerCurrentTrainingsComponent } from './trainer-current-trainings.component';


@NgModule({
  declarations: [TrainerCurrentTrainingsComponent],
  imports: [
    CommonModule,
    TrainerCurrentTrainingsRoutingModule
  ]
})
export class TrainerCurrentTrainingsModule { }
