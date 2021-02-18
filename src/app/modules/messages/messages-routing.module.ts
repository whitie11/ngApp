import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageMainComponent } from './components/message-main/message-main.component';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
  path: '',
  component: MessagesComponent,
  children: [
    { path: '', component: MessageMainComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
