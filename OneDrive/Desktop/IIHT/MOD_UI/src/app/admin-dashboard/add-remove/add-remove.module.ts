import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRemoveRoutingModule } from './add-remove-routing.module';
import { AddRemoveComponent } from './add-remove.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddRemoveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AddRemoveRoutingModule
  ]
})
export class AddRemoveModule { }
