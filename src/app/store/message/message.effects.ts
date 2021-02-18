import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { MessagesService } from 'src/app/services/messages.service';
import * as MessagesActions from './message.actions';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyMessage } from 'src/app/modules/messages/models/message';


@Injectable()

export class MessageEffects {

  constructor(
    private action$: Actions,
    private messagesService: MessagesService,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  GetMessagesFromDate$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(MessagesActions.GetMessagesFromDate),
      mergeMap((action) =>
        this.messagesService.getMessagesFromDate(action.dateFrom)
          .pipe(map((data: any) => {
            return MessagesActions.GetMessagesSuccess({ messages: data });
          }),
            catchError((error: any) => {
              this.snackBar.open('Error retrieving messages: ' + error.statusText , 'Close', {
                duration: 3000,
                verticalPosition: 'top'
            });
              return of(MessagesActions.GetMessagesFailure({ error}));
            })
          )
      )
    )
  );

  GetFilteredMessagesFromDate$: Observable<Action> = createEffect(() =>
  this.action$.pipe(
    ofType(MessagesActions.GetFilteredMessagesFromDate),
    mergeMap((action) =>
      this.messagesService.getFilteredMessagesFromDate(action.dateFrom, action.incArchived)
        .pipe(map((data: any) => {
          console.log('message effects ' + action.incArchived);
          return MessagesActions.GetMessagesSuccess({ messages: data });
        }),
          catchError((error: any) => {
            this.snackBar.open('Error retrieving messages: ' + error.statusText , 'Close', {
              duration: 3000,
              verticalPosition: 'top'
          });
            return of(MessagesActions.GetMessagesFailure({ error}));
          })
        )
    )
  )
);


  saveMessage$: Observable<Action> = createEffect(() =>
  this.action$.pipe(
    ofType(MessagesActions.SaveMessage),
    mergeMap((action) =>
      this.messagesService.saveMessage(action.message)
        .pipe(map((data: MyMessage) => {
          return MessagesActions.SaveMessageSuccess({ message: data });
        }),
          catchError((error: any) => {
            this.snackBar.open('Error saving message: ' + error.statusText , 'Close', {
              duration: 3000,
              verticalPosition: 'top'
          });
            return of(MessagesActions.SaveMessageFailure({ error}));
          })
        )
    )
  )
);

  @Effect({dispatch: false})
  SaveMessageFailure$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(MessagesActions.SaveMessageFailure),
      tap((err) => {
        this.snackBar.open('Message save failed: ' , 'Close', {
          duration: 3000,
          verticalPosition: 'top'
      });
      })
    ),
    { dispatch: false }
    );

    @Effect({dispatch: false})
    SaveMessageSuccess$: Observable<any> = createEffect(() =>
      this.action$.pipe(
        ofType(MessagesActions.SaveMessageSuccess),
        tap((err: any) => {
          this.snackBar.open('Message saved : ' , 'Close', {
            duration: 3000,
            verticalPosition: 'top'
        });
        })
      ),
      { dispatch: false }
      );


      archiveMessage$: Observable<Action> = createEffect(() =>
      this.action$.pipe(
        ofType(MessagesActions.ArchiveMessage),
        mergeMap((action) =>
          this.messagesService.archiveMessage(action.messageId)
            .pipe(map((data: MyMessage) => {
              return MessagesActions.ArchiveMessageSuccess({ message: data });
            }),
              catchError((error: any) => {
                this.snackBar.open('Error archiving message: ' + error.statusText , 'Close', {
                  duration: 3000,
                  verticalPosition: 'top'
              });
                return of(MessagesActions.ArchiveMessageFailure({ error}));
              })
            )
        )
      )
    );

}
