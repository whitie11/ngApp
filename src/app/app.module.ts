
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth_guard';

import { AuthEffects } from './store/auth/auth.effects';
import { reducers } from './store/app.states';

import { LayoutMainModule } from './modules/layout-main/layout-main.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MessageEffects } from './store/message/message.effects';
import { TokenInterceptor } from './services/token_interceptor';
import { LibraryEffects } from './store/library/library.effects';
import { RostaEffects } from './store/rosta/rosta.effects';

import { MAT_DATE_LOCALE } from '@angular/material/core';

// console.log all actions
export function login(reducer: ActionReducer<any>): ActionReducer<any> {

  return (state, action) => {
    if (action.type === '[Auth] Login Success') {
          console.log('In login success', state);

          const newState = { ...state.rosta, dutyIdList: [1, 2]  };
          return reducer(newState, action);
        }


    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [login];



@NgModule({
  declarations: [
     AppComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutMainModule,
    SharedModule,

    StoreModule.forRoot( reducers, { }),
    EffectsModule.forRoot([AuthEffects, MessageEffects, LibraryEffects, RostaEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [
  ],

  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
