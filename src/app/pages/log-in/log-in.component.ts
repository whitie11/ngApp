import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LoginDTO } from 'src/app/models/loginDTO';
import { AppState } from 'src/app/store/app.states';
import { validateWhitespace } from '../../utilities/validators';
import { LogIn } from '../../store/auth/auth.actions';
import * as AuthActions from '../../store/auth/auth.actions';
import { getIsAuth, getIsWaiting } from 'src/app/store/auth/auth.selectors';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formdata: FormGroup;
  waiting$: Observable<boolean>;
  // user: AuthDTO = new AuthDTO();
 // getState: Observable<any>;
  errorMessage: string | null | undefined;
  isAuth$: Observable<boolean>;

  constructor(private fb: FormBuilder,  private store: Store<AppState>) {
    this.waiting$ = of(true);
    this.isAuth$ = of(false);
    this.formdata = this.fb.group({
    username: this.fb.control('ian.white', [Validators.required, validateWhitespace]),
    password: this.fb.control('C@sper12', [Validators.required, validateWhitespace])
  });
   }
  ngOnInit(): void {
    this.waiting$ = this.store
    .pipe(
      select(getIsWaiting)
    );
    this.isAuth$ = this.store
    .pipe(
      select(getIsAuth)
    );
  }

  onSubmit() {
    const data = this.formdata.getRawValue() as LoginDTO;

    const x =  this.store.dispatch(AuthActions.LogIn({ payload: data}));
  }

  onLogOut() {
    this.store.dispatch(AuthActions.LogOut());
  }

}


