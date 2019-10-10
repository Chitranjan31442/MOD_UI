import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerEditProfileRoutingModule } from './trainer-edit-profile-routing.module';
import { FormsModule } from '@angular/forms';
import { TrainerEditProfileComponent } from './trainer-edit-profile.component';



@NgModule({
  declarations: [TrainerEditProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    TrainerEditProfileRoutingModule
  ]
})
export class TrainerEditProfileModule { }
