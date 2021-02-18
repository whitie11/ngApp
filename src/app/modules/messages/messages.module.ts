import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { MessageNavComponent } from './components/message-nav/message-nav.component';
import { MessageMainComponent } from './components/message-main/message-main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { MessageNewDialogComponent } from './components/message-new-dialog/message-new-dialog.component';



@NgModule({
  declarations: [
    MessagesComponent,
    MessageNavComponent,
    MessageMainComponent,
    MessageDialogComponent,
    MessageNewDialogComponent
  ],
  imports: [
    SharedModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
