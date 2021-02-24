import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RostaMainComponent } from './components/rosta-main/rosta-main.component';
import { RostaComponent } from './rosta.component';

const routes: Routes = [
  {
    path: '',
    component: RostaComponent,
    children: [
      { path: '', component: RostaMainComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RostaRoutingModule { }
