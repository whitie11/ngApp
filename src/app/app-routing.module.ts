import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutMainComponent } from './modules/layout-main/layout-main.component';

import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';

import { AuthGuardService as AuthGuard } from '../app/guards/auth_guard';


const routes: Routes = [
  // { path: 'log-in', component: LogInComponent },
  // { path: 'sign-up', component: SignUpComponent },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  //   canActivate: [AuthGuard]
  // },
  // { path: '', component: LogInComponent },
  // { path: '**', redirectTo: '/' }

  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LogInComponent,
      },
      {
        path: 'messages',
        loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'rosta',
        loadChildren: () => import('./modules/rosta/rosta.module').then(m => m.RostaModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'library',
        loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule),
        canActivate: [AuthGuard]
      },


    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

})
export class AppRoutingModule { }
