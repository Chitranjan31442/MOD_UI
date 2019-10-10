import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
