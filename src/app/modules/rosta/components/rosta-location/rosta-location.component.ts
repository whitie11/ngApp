import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RostaService } from 'src/app/services/rosta.service';
import { AppState } from 'src/app/store/app.states';
import { Duty } from '../../models/duty';
import { RotaRow, RotaRowDutyView } from '../../models/rotaRow';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';
import * as fromAuthSelectors from '../../../../store/auth/auth.selectors';
import { Staff } from 'src/app/models/staff';
import { Alloc } from '../../models/alloc';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ShiftStaffDialogComponent } from '../shift-staff-dialog/shift-staff-dialog.component';

@Component({
  selector: 'app-rosta-location',
  templateUrl: './rosta-location.component.html',
  styleUrls: ['./rosta-location.component.css']
})
export class RostaLocationComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable)
  table!: MatTable<any>;

  rotaArrayDV: RotaRowDutyView[] = [];
  rotaArrayDV$!: Subscription;

  staffIdList!: number[];
  staffIdList$!: Subscription;

  dutyIdArray!: number[];
  dutyIdArray$!: Subscription;

  weekStart!: Date;
  weekStart$!: Subscription;

  dataSource: any;
  displayedColumns: string[] = [];
  displayedColumns2: string[] = [];
  headerRowDef: string[] = ['h0'];
  headerRowDef2: string[] = [];
  headerRowDay: string[] = [];

  duties: Duty[] = [];
  duties$!: Subscription;

  staff: Staff[] = [];
  staff$!: Subscription;

  selectedSlot: [number, number] = [-1, -1];

  //  selectedStaffIdList: number[] = [];
  preSelectedStaffIdList: number[] = [];

  result: any | null;

  waiting = true;

  loggedInUserId!: number;
  loggedInUserId$!: Subscription;

  constructor(
    public dialog: MatDialog,
    private rostaService: RostaService,
    private store: Store<AppState>,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.duties$ = this.store.select(fromRostaSelectors.dutiesFromStore).subscribe(d => {
      this.duties = d;
    });

    this.loggedInUserId$ = this.store.select(fromAuthSelectors.getUserId).subscribe(id => {
      this.loggedInUserId = id;
    });

    // this.staffIdList$ = this.store.select(fromRostaSelectors.staffIdsFromStore).subscribe(s => {
    //   this.staffIdList = s;
    //   this.resetTableData();
    // });

    this.staff$ = this.rostaService.getStaffList().subscribe(list => {
      this.staff = list;
    });

    this.dutyIdArray$ = this.store.select(fromRostaSelectors.dutyIdsFromStore).subscribe(s => {
      this.dutyIdArray = s;
      this.resetTableData();
    });

    this.weekStart$ = this.store.select(fromRostaSelectors.dateFromStore).subscribe(s => {
      this.weekStart = s;
      this.setDayLabelRow(s);
      this.resetTableData();
    });
  }


  ngOnDestroy(): void {
    this.weekStart$.unsubscribe();
    this.dutyIdArray$.unsubscribe();
    this.staff$.unsubscribe();
    // this.staffIdList$.unsubscribe();
    this.duties$.unsubscribe();
  }

  setDayLabelRow(wc: Date) {
    let dateString = '';
    let dutyDate = null;
    this.headerRowDay = [];
    for (let i = 0; i < 14; i++) {
      dutyDate = new Date(new Date(this.weekStart).setDate(this.weekStart.getDate() + i));
      dateString = formatDate(dutyDate, 'E dd/MM', this.locale);
      this.headerRowDay.push(dateString);
    }
  }

  resetTableData() {

    if (this.weekStart && this.dutyIdArray && this.rotaArrayDV$ !== undefined) {
      this.waiting = true;
      this.rotaArrayDV$ = this.rostaService.getStaffPerDutyFromDate(this.weekStart, this.dutyIdArray).subscribe(r => {
        this.rotaArrayDV = r;
        console.log('Resetting table Data'); // TODO remove all console.log's
        this.dataSource = new MatTableDataSource<RotaRowDutyView>(this.rotaArrayDV);
        this.waiting = false;
      });
    }
  }

  ngOnInit(): void {
    this.rotaArrayDV$ = this.rostaService.getStaffPerDutyFromDate(this.weekStart, this.dutyIdArray).subscribe(r => {
      this.rotaArrayDV = r;
      this.setDesplayedColumns(r);
      console.log('Setting table date');
      this.dataSource = new MatTableDataSource<RotaRowDutyView>(this.rotaArrayDV);
      this.waiting = false;
    });


  }

  setDesplayedColumns(ra: RotaRowDutyView[]) {
    let index1;
    const a = ra[0][1];
    this.displayedColumns.push('duty');
    for (index1 = 0; index1 < a.length; ++index1) {
      this.displayedColumns.push(index1.toString());
      this.displayedColumns2.push(index1.toString());
      if (index1 > 0 && (index1 % 2)) {
        this.headerRowDef.push('h' + ((index1 / 2) + 0.5));
        this.headerRowDef2.push('h' + ((index1 / 2) + 0.5));
      }
    }

  }

  setAMorPM(x: number) {
    if (x % 2) {
      return 'PM';
    }
    else {
      return 'AM';
    }
  }

  setBackgroundColourCell(c: number) {
    if (c > 9 && c < 14 || c > 23) {
      return '#f2ebff';
    }
    else {
      return '000000';
    }

  }

  setBackgroundColourHeader(c: number) {
    if (c === 5 || c === 6 || c > 11) {
      return '#f2ebff';
    }
    else {
      return '000000';
    }

  }

  getStaffArray(staffArray: Staff[]) {
    let res = '';
    if (staffArray) {
      for (const staff of staffArray) {
        res = res + ' ' + staff.initials;
      }
    }
    return res;
  }


  getStaffArrayNames(staffArray: Staff[]) {
    let res = '';
    if (staffArray) {
      for (const staff of staffArray) {
        res = res + ' ' + staff.userName + ',';
      }
    }
    return res;
  }


  cellClicked(duty: Duty, i: number, selectedStaff: Staff[]) {
    if (this.selectedSlot[0] === duty.dutyId && i === this.selectedSlot[1]) {
      this.selectedSlot = [-1, -1];
    }
    else {
      this.selectedSlot = [duty.dutyId, i];
      if (selectedStaff) {
        this.preSelectedStaffIdList = this.getSelectedStaffIdArray(selectedStaff);
      }
      else { this.preSelectedStaffIdList = []; }

      this.openSP2Dialog(duty, i, this.preSelectedStaffIdList);
    }
  }

  getSelectedStaffIdArray(ss: Staff[]) {
    const selectedStaff = [];
    for (const staff of ss) {
      selectedStaff.push(staff.staffId);
    }
    return selectedStaff;
  }

  menuClick(staff: Staff, col: number, duty: Duty) { }

  menuClosed() {
    console.log('Menu closed!');
    this.selectedSlot = [-1, -1];

  }

  getSelectedDateFromCol(col: number) {
    let session = '';
    let dayNo = 0;
    if (col % 2) {
      session = 'Afternoon of the ';
    }
    else {
      session = 'Morning of the ';
    }

    if (col > 1) {
      if (col % 2) {
        dayNo = (col / 2) - 0.5;
      }
      else {
        dayNo = (col / 2);
      }
    }
    const dutyDate = new Date(new Date(this.weekStart).setDate(this.weekStart.getDate() + dayNo));
    return session + ' ' + formatDate(dutyDate, 'dd-MM-yyyy', this.locale);
  }

  openSP2Dialog(duty: Duty, col: number, selectedStaff: number[]): void {
    const dateStr = this.getSelectedDateFromCol(col);
    const dialogStaffPicker = this.dialog.open(ShiftStaffDialogComponent, {
      width: '250px',
      data: { staffList: this.staff, duty, col, selectedStaff, dateStr }

    });

    dialogStaffPicker.afterClosed().subscribe(staffIdList => {
      if (staffIdList) {
        let session = '';
        let dayNo = 0;

        if (this.selectedSlot[1] % 2) {
          session = 'PM';
        }
        else {
          session = 'AM';
        }

        if (this.selectedSlot[1] > 1) {
          if (this.selectedSlot[1] % 2) {
            dayNo = (this.selectedSlot[1] / 2) - 0.5;
          }
          else {
            dayNo = (this.selectedSlot[1] / 2);
          }
        }
        const dutyDate = new Date(new Date(this.weekStart).setDate(this.weekStart.getDate() + dayNo));
        const dateString = formatDate(dutyDate, 'yyyy-MM-dd', this.locale);
        for (const s of staffIdList) {
          console.log('Saving StaffId = ' + s);
          const alloc: Alloc = {
            date: dateString,
            session,
            staff: s,
            duty: duty.dutyId,
            savedBy: this.loggedInUserId
          };
          this.saveAndReset(alloc);
        }
        if (this.preSelectedStaffIdList.length > 0) {
          this.preSelectedStaffIdList.forEach(element => {
            // check if in staffIdList
            if (!this.checkIfIdinList(element, staffIdList)) {
              console.log('Need to cancel shift for ID = ' + element);
              const alloc: Alloc = {
                date: dateString,
                session,
                staff: element,
                duty: 0,
                savedBy: this.loggedInUserId
              };
              this.saveAndReset(alloc);
            }
          });
        }
        this.resetTableData();
      }
      this.selectedSlot = [-1, -1];

    });
  }

  saveAndReset(alloc: Alloc) {
    const res = this.rostaService.saveOrEditDuty(alloc).subscribe((data: any) => {
      console.log('result from save or edit = ' + data);
      if (data !== false) {
        // this.resetTableData();
      }

    });
  }

  checkIfIdinList(n: number, list: number[]) {
    for (const l of list) {
      if (l === n) {
        return true;
      }
    }
    return false;
  }


  isSelected(s: number, i: number) {
    if (i === this.selectedSlot[1] && s === this.selectedSlot[0]) {
      return true;
    }
    else { return false; }
  }

}

