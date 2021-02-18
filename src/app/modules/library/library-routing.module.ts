import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryMainComponent } from './components/library-main/library-main.component';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      { path: '', component: LibraryMainComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
