import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RostaRoutingModule } from './rosta-routing.module';
import { RostaComponent } from './rosta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RostaNavComponent } from './components/rosta-nav/rosta-nav.component';
import { RostaMainComponent } from './components/rosta-main/rosta-main.component';
import { RostaStaffComponent } from './components/rosta-staff/rosta-staff.component';
import { RostaLocationComponent } from './components/rosta-location/rosta-location.component';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from 'src/app/utilities/customDateAdapter';
import { StaffPickerDialogComponent } from './components/staff-picker-dialog/staff-picker-dialog.component';
import { LocationPickerDialogComponent } from './components/location-picker-dialog/location-picker-dialog.component';
import { ShiftStaffDialogComponent } from './components/shift-staff-dialog/shift-staff-dialog.component';


@NgModule({
  declarations: [
    RostaComponent,
    RostaNavComponent,
    RostaMainComponent,
    RostaStaffComponent,
    RostaLocationComponent,
    StaffPickerDialogComponent,
    LocationPickerDialogComponent,
    ShiftStaffDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RostaRoutingModule
  ],
  providers: [
   { provide: DateAdapter, useClass: CustomDateAdapter },
   { provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class RostaModule { }
