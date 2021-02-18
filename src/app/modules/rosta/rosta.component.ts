import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { Duty } from './models/duty';
import { Rota } from './models/rota';

@Component({
  selector: 'app-rosta',
  templateUrl: './rosta.component.html',
  styleUrls: ['./rosta.component.css']
})
export class RostaComponent implements OnInit {

  testDuty: Duty = {
    dutyId: 1,
    dutyCode: 'xx',
    dutyType: 'test duty'
  };

  testDuty2: Duty = {
    dutyId: 2,
    dutyCode: 'zz',
    dutyType: 'test duty'
  };

  testUser1: User = {
    id: 2,
    email: '',
    username: 'fred.blogs',
    token: '',
    first_name: 'fred',
    last_name: 'blogs'
  };

  testUser: User = {
    id: 1,
    email: '',
    username: 'test.name',
    token: '',
    first_name: 'test',
    last_name: 'name'
  };

  rota: Rota = {
    staff: this.testUser,
    day01am: this.testDuty,
    day01pm: this.testDuty,
    day02am: this.testDuty,
    day02pm: this.testDuty,
    day03am: this.testDuty,
    day03pm: this.testDuty,
  };

  rota2: Rota = {
    staff: this.testUser1,
    day01am: this.testDuty2,
    day01pm: this.testDuty2,
    day02am: this.testDuty2,
    day02pm: this.testDuty2,
    day03am: this.testDuty2,
    day03pm: this.testDuty2,
  };

  rotaArray: Rota[] = [this.rota, this.rota2];

  dataSource: any;
  displayedColumns: string[] = ['staff', 'day01am', 'day01pm', 'day02am', 'day02pm', 'day03am', 'day03pm'  ];

  constructor() {
    this.dataSource = new MatTableDataSource<Rota>(this.rotaArray);
   }

  ngOnInit(): void {
  }

}
