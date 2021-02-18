import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RostaComponent } from './rosta.component';

const routes: Routes = [
  {
    path: '',
    component: RostaComponent,
    // children: [
    //   { path: '', component: MessageMainComponent }
    // ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RostaRoutingModule { }
