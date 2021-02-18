import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
 //   BrowserModule

  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
 //   BrowserModule
  ]
})
export class SharedModule { }
