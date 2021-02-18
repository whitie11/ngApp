import { Component, OnInit } from '@angular/core';
import { FEATURE_REDUCERS, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.states';

import * as AuthActions from '../../../../store/auth/auth.actions';
import * as fromAuthSelectors from '../../../../store/auth/auth.selectors';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  username$: Observable<string| null>;
  username = 'Fred';
 // userId$: Observable<number | null>;

  constructor(private store: Store<AppState>) {
    this.isAuthenticated$ = this.store.select(fromAuthSelectors.getIsAuth);
    this.username$ = this.store.select(fromAuthSelectors.getUserName);
  //  this.userId$ = this.store.select(fromAuthSelectors.getUserId);
  }

  ngOnInit(): void {
  }

  onLogOut() {

    this.store.dispatch(AuthActions.LogOut());

  }

}
