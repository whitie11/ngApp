
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.states';
import { MyMessage } from '../../models/message';
import * as fromMessageSelectors from '../../../../store/message/message.selectors';
import * as fromAuthSelectors from '../../../../store/auth/auth.selectors';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { MessageNewDialogComponent } from '../message-new-dialog/message-new-dialog.component';
import { NewMessageData } from '../../models/newMessageData';
import * as MessageActions from '../../../../store/message/message.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-message-main',
  templateUrl: './message-main.component.html',
  styleUrls: ['./message-main.component.css']
})
export class MessageMainComponent implements OnInit, AfterViewInit {
  messages$!: Observable<MyMessage[]>;
  messages: MyMessage[] = [];
  displayedColumns: string[] = ['subject', 'body', 'date', 'postedBy'];
  dateFrom$: Observable<Date>;
  dateFrom!: Date;
  userId$!: Observable<number>;
  userId!: number;

  newMessage: NewMessageData = {
    subject: 'a',
    body: 'x',
    isActive: false,
    postedBy_id: null
  };

  dataSource: any;
  // private paginator!: MatPaginator;


  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog) {
    this.dateFrom$ = this.store.select(fromMessageSelectors.getDateFrom);
    this.dateFrom$.subscribe(date => {
      this.dateFrom = date;

      this.userId$ = this.store.select(fromAuthSelectors.getUserId);
      this.userId$.subscribe(id => this.userId = id);
    });

    this.messages$ = this.store.select(fromMessageSelectors.getMessagesFromStore);
    this.messages$.subscribe(list => {
      this.messages = list;
      this.dataSource = new MatTableDataSource<MyMessage>(this.messages);
      this.dataSource.paginator = this.paginator;
    });
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

    //  this.messages$ = this.store.select(fromMessageSelectors.getMessagesFromStore);
    //  this.messages$.subscribe(list => {
    //   this.messages = list;
    //   console.log('in afterViewInit');
    // });

    //  this.dataSource = new MatTableDataSource<MyMessage>(this.messages);
    //  this.dataSource.paginator = this.paginator;

   }

  ngOnInit(): void { }

  onRowSelected(message: MyMessage) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '600px',
      height: '400px',
      data: message
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isActive) {
                  const messageId = result.id;
                  console.log('About to archive ' + messageId);
                  this.store.dispatch(MessageActions.ArchiveMessage({ messageId}));
        }
        else {
          console.log('message already archived!');
        }
      }
      else {
        console.log('No data returned!!');
      }
      result = null;
    });
  }

  onNewMessage() {
    const dialogRefNew = this.dialog.open(MessageNewDialogComponent, {
      width: '600px',
      height: '400px',
    });

    dialogRefNew.afterClosed().subscribe(result => {
      if (result) {
        this.newMessage = result;
        this.newMessage.isActive = true;
        this.newMessage.postedBy_id = this.userId;
        console.log('The dialog was saved ' + this.newMessage.body);
        this.store.dispatch(MessageActions.SaveMessage({ message: this.newMessage }));
       // result = null;
      }
      else {
        console.log('No data returned!!');
      }
      result = null;

    });
  }
}




