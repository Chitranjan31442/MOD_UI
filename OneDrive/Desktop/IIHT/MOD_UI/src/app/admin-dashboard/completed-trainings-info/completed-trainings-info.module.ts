import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedTrainingsInfoRoutingModule } from './completed-trainings-info-routing.module';
import { CompletedTrainingsInfoComponent } from './completed-trainings-info.component';


@NgModule({
  declarations: [CompletedTrainingsInfoComponent],
  imports: [
    CommonModule,
    CompletedTrainingsInfoRoutingModule
  ]
})
export class CompletedTrainingsInfoModule { }
