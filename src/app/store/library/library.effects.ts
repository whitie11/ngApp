import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as LibraryActions from './library.actions';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from 'src/app/services/library.service';


@Injectable()

export class LibraryEffects {

    constructor(
        private action$: Actions,
        private libraryService: LibraryService,
        private router: Router,
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) { }

    GetFileList$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(LibraryActions.GetsavedFiles),
            mergeMap(() =>
                this.libraryService.getSavedFiles()
                    .pipe(map((data: any) => {
                        return LibraryActions.GetSavedFilesSuccess({ files: data });
                    }),
                        catchError((error: any) => {
                            this.snackBar.open('Error retrieving file list: ' + error.statusText, 'Close', {
                                duration: 3000,
                                verticalPosition: 'top'
                            });
                            return of(LibraryActions.GetSavedFilesFailure({ error }));
                        })
                    )
            )
        )
    );



}

