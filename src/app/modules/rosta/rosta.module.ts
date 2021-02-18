import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RostaRoutingModule } from './rosta-routing.module';
import { RostaComponent } from './rosta.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RostaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RostaRoutingModule
  ]
})
export class RostaModule { }
