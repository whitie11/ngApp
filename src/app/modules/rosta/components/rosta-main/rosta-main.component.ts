import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosta-main',
  templateUrl: './rosta-main.component.html',
  styleUrls: ['./rosta-main.component.css']
})
export class RostaMainComponent implements OnInit {

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
