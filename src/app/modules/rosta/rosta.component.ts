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

  constructor() { }
  
  ngOnInit(): void {
  }

}
