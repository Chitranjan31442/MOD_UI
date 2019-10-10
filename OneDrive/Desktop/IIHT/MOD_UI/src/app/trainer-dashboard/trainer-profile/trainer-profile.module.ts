import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';
import { TrainerProfileComponent } from './trainer-profile.component';


@NgModule({
  declarations: [TrainerProfileComponent],
  imports: [
    CommonModule,
    TrainerProfileRoutingModule
  ]
})
export class TrainerProfileModule { }
