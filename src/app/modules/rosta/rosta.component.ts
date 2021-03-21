import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosta',
  templateUrl: './rosta.component.html',
  styleUrls: ['./rosta.component.css']
})



export class RostaComponent implements OnInit {

  weekCommencing: Date;

  constructor() {
    const dt = new Date(); // current date of week
    const currentWeekDay = dt.getDay();
    const lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
    this.weekCommencing = new Date(new Date(dt).setDate(dt.getDate() - lessDays));
  }

  ngOnInit(): void {
    console.log('Rosta component init');
  }

}
