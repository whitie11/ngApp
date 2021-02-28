import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RostaService } from 'src/app/services/rosta.service';
import { AppState } from 'src/app/store/app.states';
import { Duty } from '../../models/duty';
import { RotaRow, RotaRowDutyView } from '../../models/rotaRow';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';
import { Staff } from 'src/app/models/staff';
import { Alloc } from '../../models/alloc';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-rosta-location',
  templateUrl: './rosta-location.component.html',
  styleUrls: ['./rosta-location.component.css']
})
export class RostaLocationComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;

  rotaArrayDV: RotaRowDutyView[] = [];
  rotaArrayDV$!: Observable<RotaRowDutyView[]>;

  staffIdList!: number[];
  staffIdList$!: Observable<number[]>;

  dutyIdArray!: number[];
  dutyIdArray$!: Observable<number[]>;

  weekStart!: Date;
  weekStart$!: Observable<Date>;

  dataSource: any;
  displayedColumns: string[] = [];
  displayedColumns2: string[] = [];
  headerRowDef: string[] = ['h0'];
  headerRowDef2: string[] = [];
  headerRowDay: string[] = [];

  duties: Duty[] = [];
  duties$!: Observable<Duty[]>;

  staff: Staff[] = [];
  staff$!: Observable<Staff[]>;

  selectedSlot: [number, number] = [-1, -1];

  result: any | null;


  constructor(
    private rostaService: RostaService,
    private store: Store<AppState>,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.duties$ = this.store.select(fromRostaSelectors.dutiesFromStore);
    this.duties$.subscribe(d => {
      this.duties = d;
    });

    this.staffIdList$ = this.store.select(fromRostaSelectors.staffIdsFromStore);
    this.staffIdList$.subscribe(s => {
      this.staffIdList = s;
      this.resetTableData();
    });

    this.dutyIdArray$ = this.store.select(fromRostaSelectors.dutyIdsFromStore);
    this.dutyIdArray$.subscribe(s => {
      this.dutyIdArray = s;
      this.resetTableData();
    });

    this.weekStart$ = this.store.select(fromRostaSelectors.dateFromStore);
    this.weekStart$.subscribe(s => {
      this.weekStart = s;
      this.setDayLabelRow(s);
      this.resetTableData();
    });
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
    if (this.weekStart && this.staffIdList) {
      this.rotaArrayDV$ = this.rostaService.getStaffPerDutyFromDate(this.weekStart, this.dutyIdArray);
      this.rotaArrayDV$.subscribe(r => {
        this.rotaArrayDV = r;
        // this.setDesplayedColumns(r);
        // this.dataSource = new MatTableDataSource();
        console.log('Resetting table Data');
        this.dataSource = new MatTableDataSource<RotaRowDutyView>(this.rotaArrayDV);
      });
    }
  }

  ngOnInit(): void {
    this.rotaArrayDV$ = this.rostaService.getStaffPerDutyFromDate(this.weekStart, this.dutyIdArray);
    this.rotaArrayDV$.subscribe(r => {
      this.rotaArrayDV = r;
      this.setDesplayedColumns(r);
      console.log('Setting table date');
      this.dataSource = new MatTableDataSource<RotaRowDutyView>(this.rotaArrayDV);
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
      for (const s of staffArray) {
        if (true) {
          res = res + ' ' + s.grade;
        }
      }
      return res;
    }
    return '';
  }

  getStaffArrayNames(staffArray: Staff[]) {
    let res = '';
    if (staffArray) {
      for (const s of staffArray) {
        if (true) {
          res = res + ' ' + s.userName;
        }
      }
      return res;
    }
    return '';
  }

  cellClicked(s: Duty, i: number) {
    if (this.selectedSlot[0] === s.dutyId && i === this.selectedSlot[1]) {
      this.selectedSlot = [-1, -1];
    }
    else {
      this.selectedSlot = [s.dutyId, i];
    }
  }

  menuClick(staff: Staff, col: number, duty: Duty) {
    // console.log('Staff Id = ' + staff.userName + ' index = ' + col + ' => ' + duty.dutyCode);

    // let session = '';
    // let dayNo = 0;

    // if (col % 2) {
    //   session = 'PM';
    // }
    // else {
    //   session = 'AM';
    // }

    // if (col > 1) {
    //   if (col % 2) {
    //     dayNo = (col / 2) - 0.5;
    //   }
    //   else {
    //     dayNo = (col / 2);
    //   }
    // }
    // const dutyDate = new Date(new Date(this.weekStart).setDate(this.weekStart.getDate() + dayNo));
    // const dateString = formatDate(dutyDate, 'yyyy-MM-dd', this.locale);
    // const alloc: Alloc = {
    //   date: dateString,
    //   session,
    //   staff: staff.staffId,
    //   duty: duty.dutyId
    // };
    // this.rostaService.saveOrEditDuty(alloc).subscribe(data => {
    //   this.result = data;
    //   console.log('result = ' + data);
    //   this.resetTableData();
    // });

  }

  menuClosed() {
    console.log('Menu closed!');
    this.selectedSlot = [-1, -1];

  }

  isSelected(s: number, i: number) {
      if (i === this.selectedSlot[1] && s === this.selectedSlot[0]) {
        return true;
      }
      else { return false; }
  }

}

