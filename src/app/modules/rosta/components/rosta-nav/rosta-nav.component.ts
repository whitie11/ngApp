import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import * as RostaActions from '../../../../store/rosta/rosta.actions';


@Component({
  selector: 'app-rosta-nav',
  templateUrl: './rosta-nav.component.html',
  styleUrls: ['./rosta-nav.component.css']
})
export class RostaNavComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.dispatch(RostaActions.GetDuties());

  }



}
