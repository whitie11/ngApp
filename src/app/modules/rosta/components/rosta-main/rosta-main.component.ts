import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Staff } from 'src/app/models/staff';
import { RostaService } from 'src/app/services/rosta.service';
import { AppState } from 'src/app/store/app.states';
import { StaffPickerDialogComponent } from '../staff-picker-dialog/staff-picker-dialog.component';
import * as RostaActions from '../../../../store/rosta/rosta.actions';
import * as fromAuthSelectors from '../../../../store/auth/auth.selectors';
import { LocationPickerDialogComponent } from '../location-picker-dialog/location-picker-dialog.component';
import { Duty } from '../../models/duty';
import { Config } from '../../models/config';


@Component({
  selector: 'app-rosta-main',
  templateUrl: './rosta-main.component.html',
  styleUrls: ['./rosta-main.component.css']
})
export class RostaMainComponent implements OnInit, OnDestroy {
  weekCommencing!: Date;
  tabLoadTimes: Date[] = [];
  staffList: Staff[] = [];
  staffList$!: Subscription;
  dutyList: Duty[] = [];
  dutyList$!: Subscription;
  config!: Config;

  constructor(public dialog: MatDialog,
              private rostaService: RostaService,
              private store: Store<AppState>) {


    const dt = new Date(); // current date of week
    const currentWeekDay = dt.getDay();
    const lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;

    this.restorePreferences();

    this.weekCommencing = new Date(new Date(dt).setDate(dt.getDate() - lessDays));

    this.store.dispatch(RostaActions.SetDateFrom({dateFrom: this.weekCommencing}));

    this.staffList$ = this.rostaService.getStaffList().subscribe(list => {
      this.staffList = list;
    });

    this.dutyList$ = this.rostaService.getDutyList().subscribe(list => {
      this.dutyList = list;
    });

    this.store.dispatch(RostaActions.GetDuties());

  }

   restorePreferences() {
    let userId = null;
    this.store.select(fromAuthSelectors.getUserId).subscribe( res => {
      userId = res;
      this.config = {
        userId: res,
        selected_duties: [1],
        selected_staff: [userId]
      };

      this.rostaService.getPreSelectedConfig(userId).subscribe( (data: Config) => {
      console.log('get config data ', data);
      if (data){
      this.config = data;
      }
      console.log('Config Data ', data);
      this.store.dispatch(RostaActions.SetDutyIdList({dutyIdList: this.config.selected_duties}));
      this.store.dispatch(RostaActions.SetStaffIdList({staffIdList: this.config.selected_staff}));

    });
 });

    // this.store.dispatch(RostaActions.SetDutyIdList({ dutyIdList: [1, 2] }));
    // this.store.dispatch(RostaActions.SetStaffIdList({ staffIdList: [1, 2] }));
   }

  ngOnDestroy(): void {
    if (this.staffList$) {
      this.staffList$.unsubscribe();
    }
    if (this.dutyList$) {
      this.dutyList$.unsubscribe();
    }

  }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Only allow Monday to be selected.
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
      this.config.selected_staff = result;
      this.rostaService.setPreSelectedConfig(this.config);
    }
    });
  }

    openDutyPickerDialog(): void {
    const dialogRefDutyPicker = this.dialog.open(LocationPickerDialogComponent, {
      width: '450px',
      data: this.dutyList
    });

    dialogRefDutyPicker.afterClosed().subscribe(result => {
      if ( result && result.length > 0) {
      this.store.dispatch(RostaActions.SetDutyIdList({ dutyIdList: result }));
      this.config.selected_duties = result;
      this.rostaService.setPreSelectedConfig(this.config);
    }
    });
  }

}
