import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingsInfoRoutingModule } from './current-trainings-info-routing.module';
import { CurrentTrainingsInfoComponent } from './current-trainings-info.component';


@NgModule({
  declarations: [CurrentTrainingsInfoComponent],
  imports: [
    CommonModule,
    CurrentTrainingsInfoRoutingModule
  ]
})
export class CurrentTrainingsInfoModule { }
