import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as RostaActions from './rosta.actions';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RostaService } from 'src/app/services/rosta.service';


@Injectable()

export class LibraryEffects {

    constructor(
        private action$: Actions,
        private rostaService: RostaService,
        private snackBar: MatSnackBar
    ) { }

    GetDuties$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(RostaActions.GetDuties),
            mergeMap(() =>
                this.rostaService.getDuties()
                    .pipe(map((data: any) => {
                        return RostaActions.GetDutiesSuccess({ duties: data });
                    }),
                        catchError((error: any) => {
                            this.snackBar.open('Error retrieving file list: ' + error.statusText, 'Close', {
                                duration: 3000,
                                verticalPosition: 'top'
                            });
                            return of(RostaActions.GetDutiesFailure({ error }));
                        })
                    )
            )
        )
    );



}
