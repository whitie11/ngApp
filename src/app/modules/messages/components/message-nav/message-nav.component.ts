import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { parse, sub, subDays, toDate } from 'date-fns';
import { AppState } from 'src/app/store/app.states';
import { MessageRange, ranges } from '../../models/messageRange';
import * as MessageActions from '../../../../store/message/message.actions';
import { Observable } from 'rxjs';
import * as fromMessageSelectors from '../../../../store/message/message.selectors';

@Component({
  selector: 'app-message-nav',
  templateUrl: './message-nav.component.html',
  styleUrls: ['./message-nav.component.css']
})



export class MessageNavComponent implements OnInit {
  ranges = ranges;

  selectedRange$!: Observable<string>;
  selectedRange!: string;
  selectedDate$!: Observable<Date>;
  selectedDate!: Date;
  isWaiting$!: Observable<boolean>;
  incArchived$!: Observable<boolean>;
  incArchived = false;


  constructor(private store: Store<AppState>) {
    // this.isWaiting$ = this.store.select(fromMessageSelectors.getIsWaiting);
    // this.selectedRange$ = this.store.select(fromMessageSelectors.getDateRange);
    // this.selectedRange$.subscribe(r => { this.selectedRange = r; });

    // this.incArchived$ = this.store.select(fromMessageSelectors.getIncArchived);
    // this.incArchived$.subscribe(a => { this.incArchived = a; });

    // this.selectedDate$ = this.store.select(fromMessageSelectors.getDateFrom);
    // this.selectedDate$.subscribe(r => { this.selectedDate = r; });
    // this.store.dispatch(MessageActions.GetFilteredMessagesFromDate({ dateFrom: this.selectedDate , incArchived: this.incArchived}));

  }
  ngOnInit(): void {
    this.isWaiting$ = this.store.select(fromMessageSelectors.getIsWaiting);
    this.selectedRange$ = this.store.select(fromMessageSelectors.getDateRange);
    this.selectedRange$.subscribe(r => { this.selectedRange = r; });

    this.incArchived$ = this.store.select(fromMessageSelectors.getIncArchived);
    this.incArchived$.subscribe(a => { this.incArchived = a; });

    this.selectedDate$ = this.store.select(fromMessageSelectors.getDateFrom);
    this.selectedDate$.subscribe(r => { this.selectedDate = r; });
    this.store.dispatch(MessageActions.GetFilteredMessagesFromDate({ dateFrom: this.selectedDate , incArchived: this.incArchived}));
  }

  onChange() {
    switch (this.selectedRange) {
      case 'range_all': {
        this.selectedDate = parse('2021-01-01', 'yyyy-MM-dd', new Date());
        break;
      }
      case 'range1': {
        // statements;
        this.selectedDate = subDays(new Date(), 7);
        break;
      }
      case 'range2': {
        this.selectedDate = subDays(new Date(), 14);
        break;
      }
      case 'range3': {
        this.selectedDate = subDays(new Date(), 21);
        break;
      }
      case 'range4': {
        this.selectedDate = subDays(new Date(), 28);
        break;
      }

      default: {
        // statements;
        break;
      }
    }
    this.store.dispatch(MessageActions.SetRange({ selectedRange: this.selectedRange }));
    this.store.dispatch(MessageActions.SetDateFrom({ dateFrom: this.selectedDate }));
    this.store.dispatch(MessageActions.GetFilteredMessagesFromDate({ dateFrom: this.selectedDate, incArchived: this.incArchived }));
  }

  onDateChanged() {
    this.store.dispatch(MessageActions.SetDateFrom({ dateFrom: this.selectedDate }));
    this.store.dispatch(MessageActions.GetFilteredMessagesFromDate({ dateFrom: this.selectedDate, incArchived: this.incArchived }));
  }

  onArchiveChanged(isChecked: boolean) {
    this.store.dispatch(MessageActions.SetIncArchived({ incArchived: isChecked }));
    console.log('checkbox clicked ' + isChecked);
    this.store.dispatch(MessageActions.GetFilteredMessagesFromDate({ dateFrom: this.selectedDate, incArchived: isChecked }));
  }

}
