import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main.component';
// import { HomeComponent } from 'src/app/pages/home/home.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { LogInComponent } from 'src/app/pages/log-in/log-in.component';

import { HeaderComponent } from 'src/app/modules/layout-main/components/header/header.component';
import { FooterComponent } from 'src/app/modules/layout-main/components/footer/footer.component';



@NgModule({
  declarations: [
    LayoutMainComponent,
  // HomeComponent,
    LogInComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class LayoutMainModule { }
