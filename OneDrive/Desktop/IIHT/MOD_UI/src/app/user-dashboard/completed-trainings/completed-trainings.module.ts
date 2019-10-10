import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedTrainingsRoutingModule } from './completed-trainings-routing.module';
import { CompletedTrainingsComponent } from './completed-trainings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompletedTrainingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CompletedTrainingsRoutingModule
  ]
})
export class CompletedTrainingsModule { }
