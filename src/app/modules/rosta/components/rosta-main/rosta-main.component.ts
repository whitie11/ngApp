import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/models/staff';
import { RostaService } from 'src/app/services/rosta.service';
import { AppState } from 'src/app/store/app.states';
import { StaffPickerDialogComponent } from '../staff-picker-dialog/staff-picker-dialog.component';
import * as RostaActions from '../../../../store/rosta/rosta.actions';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';

@Component({
  selector: 'app-rosta-main',
  templateUrl: './rosta-main.component.html',
  styleUrls: ['./rosta-main.component.css']
})
export class RostaMainComponent implements OnInit {
  weekCommencing!: Date;
  tabLoadTimes: Date[] = [];
  staffList: Staff[] = [];
  staffList$!: Observable<Staff[]>;


  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  constructor(public dialog: MatDialog,
              private rostaService: RostaService,
              private store: Store<AppState>) {

    const dt = new Date(); // current date of week
    const currentWeekDay = dt.getDay();
    const lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
    this.weekCommencing = new Date(new Date(dt).setDate(dt.getDate() - lessDays));

    this.store.dispatch(RostaActions.SetDateFrom({dateFrom: this.weekCommencing}));

    // this.store.select(fromRostaSelectors.dateFromStore).subscribe(d => {
    //   this.weekCommencing = d;
    // });


    this.staffList$ = this.rostaService.getStaffList();
    this.staffList$.subscribe(list => {
      this.staffList = list;
    });

    this.store.dispatch(RostaActions.GetDuties());

  }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day === 1;
  }

  dateChanged(wc: any) {
    console.log('W/C ' + wc);
    this.store.dispatch(RostaActions.SetDateFrom({dateFrom: wc}));
  }

  openSPDialog(): void {
    const dialogRefStaffPicker = this.dialog.open(StaffPickerDialogComponent, {
      width: '250px',
      data: this.staffList
    });

    dialogRefStaffPicker.afterClosed().subscribe(result => {
      console.log('Selected Staff ' + result);
      if ( result && result.length > 0) {
      this.store.dispatch(RostaActions.SetStaffIdList({ staffIdList: result }));
      }
    });
  }

}
