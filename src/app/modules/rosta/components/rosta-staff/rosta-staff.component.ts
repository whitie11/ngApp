import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { parse } from 'date-fns';
import { Observable } from 'rxjs';
import { RostaService } from 'src/app/services/rosta.service';
import { AppState } from 'src/app/store/app.states';
import { Duty } from '../../models/duty';
import { RotaRow } from '../../models/rotaRow';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';
import { Staff } from 'src/app/models/staff';


@Component({
  selector: 'app-rosta-staff',
  templateUrl: './rosta-staff.component.html',
  styleUrls: ['./rosta-staff.component.css']
})
export class RostaStaffComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;

  rotaArray: RotaRow[] = [];
  rotaArray$!: Observable<RotaRow[]>;

  staffList = [2, 1, 3, 5];
  weekStart = parse('2021-01-08', 'yyyy-MM-dd', new Date());

  dataSource: any;
  displayedColumns: string[] = [];
  displayedColumns2: string[] = [];
  headerRowDef: string[] = ['h0'];
  headerRowDef2: string[] = [];
  headerRowDay: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  duties: Duty[] = [];
  duties$!: Observable<Duty[]>;

  selectedSlot: [number, number] = [-1, -1];

  constructor(
    private rostaService: RostaService,
    private store: Store<AppState>
  ) {

    this.rotaArray$ = this.rostaService.getDutiesFromDate(this.weekStart, this.staffList);
    this.rotaArray$.subscribe(r => {
      this.rotaArray = r;
      this.setDesplayedColumns(r);
      this.dataSource = new MatTableDataSource<RotaRow>(this.rotaArray);
    });

  }

  ngOnInit(): void {
    this.duties$ = this.store.select(fromRostaSelectors.dutiesFromStore);
    this.duties$.subscribe(d => {
      this.duties = d;
    });

  }

  setDesplayedColumns(ra: RotaRow[]) {
    let index1;
    const a = ra[0][1];
    this.displayedColumns.push('staff');
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

  setBackgroundColourCell(c: number, s: any) {
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

  cellClicked(s: Staff, i: number) {
    if (this.selectedSlot[0] === s.staffId && i === this.selectedSlot[1]) {
      this.selectedSlot = [-1, -1];
    }
    else {
      this.selectedSlot = [s.staffId, i];
    }
    console.log(this.selectedSlot[0] + ',' + this.selectedSlot[1]);

    let session = '';
    let dayNo = 0;

    if (i % 2) {
      session = 'PM';
    }
    else {
      session = 'AM';
    }

    if (i > 1) {
      if (i % 2) {
        dayNo = (i / 2) - 0.5;
      }
      else {
        dayNo = (i / 2);
      }

    }

    console.log(s.userName + ' ' + this.headerRowDay[dayNo] + ' ' + session);
  }

  menuClick(staffId: any, col: number, duty: string) {
    console.log('Staff Id = ' + staffId.userName + ' index = ' + col + ' => ' + duty);
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
