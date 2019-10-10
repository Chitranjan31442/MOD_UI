import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlockRoutingModule } from './add-block-routing.module';
import { AddBlockComponent } from './add-block.component';


@NgModule({
  declarations: [AddBlockComponent],
  imports: [
    CommonModule,
    AddBlockRoutingModule
  ]
})
export class AddBlockModule { }
