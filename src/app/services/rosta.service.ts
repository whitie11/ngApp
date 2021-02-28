import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { MyMessage } from '../modules/messages/models/message';
import { NewMessageData } from '../modules/messages/models/newMessageData';
import { Alloc } from '../modules/rosta/models/alloc';
import { Duty } from '../modules/rosta/models/duty';
import { RotaRow } from '../modules/rosta/models/rotaRow';

@Injectable({
  providedIn: 'root'
})
export class RostaService {
  private BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

//   public  getAllMessages(): Observable<MyMessage[] > {
//     const url = `${this.BASE_URL}/messages/all_messages/`;
//     const result = this.http.get<MyMessage[]>(url);
//     return  result;
//   }

  public  getDutiesFromDate(weekStart: Date, staffList: number[]): Observable<RotaRow[] > {
    const url = `${this.BASE_URL}/rosta/duty_list/`;
    const weekStartStr = weekStart.toLocaleDateString();
    return this.http.post<any>(url, {weekStartStr, staffList });
  }

  public saveOrEditDuty(alloc: Alloc): Observable<Alloc> {
    const url = `${this.BASE_URL}/alloc/`;
    const json = JSON.stringify(alloc);
    return this.http.put<any>(url, json);
  }

  public  getDuties(): Observable<Duty[] > {
    const url = `${this.BASE_URL}/rosta/duties/`;
    return this.http.get<Duty[]>(url);
  }

  public  getStaffList(): Observable<Staff[] > {
    const url = `${this.BASE_URL}/staff/`;
    return this.http.get<Staff[]>(url);
  }

}