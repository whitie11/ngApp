import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { parse } from 'date-fns';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { RostaService } from 'src/app/services/rosta.service';
import { Duty } from './models/duty';
import { Rota } from './models/rota';
import { RotaRow } from './models/rotaRow';

// type RotaRow = [User, Duty[]];

@Component({
  selector: 'app-rosta',
  templateUrl: './rosta.component.html',
  styleUrls: ['./rosta.component.css']
})



export class RostaComponent implements OnInit {

  // testDuty: Duty = {
  //   dutyId: 1,
  //   dutyCode: 'xx',
  //   dutyType: 'test duty'
  // };

  // testDuty2: Duty = {
  //   dutyId: 2,
  //   dutyCode: 'zz',
  //   dutyType: 'test duty'
  // };

  // testUser1: User = {
  //   id: 2,
  //   email: '',
  //   username: 'fred.blogs',
  //   token: '',
  //   first_name: 'fred',
  //   last_name: 'blogs'
  // };

  // testUser: User = {
  //   id: 1,
  //   email: '',
  //   username: 'test.name',
  //   token: '',
  //   first_name: 'test',
  //   last_name: 'name'
  // };

  // rota: Duty[] = [
  //   this.testDuty,
  //   this.testDuty,
  //   this.testDuty2,
  //   this.testDuty,
  //   this.testDuty,
  //   this.testDuty,
  // ];

  // rota2: Duty[] = [
  //   this.testDuty2,
  //   this.testDuty2,
  //   this.testDuty2,
  //   this.testDuty,
  //   this.testDuty2,
  //   this.testDuty2,
  // ];



  // rotaRow1: RotaRow = [this.testUser, this.rota];
  // rotaRow2: RotaRow = [this.testUser1, this.rota2];
  // rotaArray: RotaRow[] = [this.rotaRow1, this.rotaRow2];

  rotaArray: RotaRow[] = [];
  rotaArray$!: Observable<RotaRow[]>;

  staffList = [2, 1, 3];
  weekStart = parse('2021-01-08', 'yyyy-MM-dd', new Date());

  dataSource: any;
  displayedColumns: string[] = ['staff', 'day01am', 'day01pm', 'day02am', 'day02pm', 'day03am', 'day03pm'];

  constructor(
    private rostaService: RostaService,
  ) {

    this.rotaArray$ = this.rostaService.getDutiesFromDate(this.weekStart, this.staffList);
    this.rotaArray$.subscribe(r => {
      this.rotaArray = r;
      this.dataSource = new MatTableDataSource<RotaRow>(this.rotaArray);
    });

  }

  ngOnInit(): void {
  }

}
