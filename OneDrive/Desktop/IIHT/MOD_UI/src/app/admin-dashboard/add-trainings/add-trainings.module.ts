import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTrainingsRoutingModule } from './add-trainings-routing.module';
import { AddTrainingsComponent } from './add-trainings.component';


@NgModule({
  declarations: [AddTrainingsComponent],
  imports: [
    CommonModule,
    AddTrainingsRoutingModule
  ]
})
export class AddTrainingsModule { }
