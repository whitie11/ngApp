import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RostaRoutingModule } from './rosta-routing.module';
import { RostaComponent } from './rosta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RostaNavComponent } from './components/rosta-nav/rosta-nav.component';
import { RostaMainComponent } from './components/rosta-main/rosta-main.component';
import { RostaStaffComponent } from './components/rosta-staff/rosta-staff.component';
import { RostaLocationComponent } from './components/rosta-location/rosta-location.component';


@NgModule({
  declarations: [RostaComponent, RostaNavComponent, RostaMainComponent, RostaStaffComponent, RostaLocationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RostaRoutingModule
  ]
})
export class RostaModule { }
