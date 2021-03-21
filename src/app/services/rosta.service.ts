import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { MyMessage } from '../modules/messages/models/message';
import { NewMessageData } from '../modules/messages/models/newMessageData';
import { Alloc } from '../modules/rosta/models/alloc';
import { Duty } from '../modules/rosta/models/duty';
import { RotaRow, RotaRowDutyView } from '../modules/rosta/models/rotaRow';
import { environment } from '../../environments/environment';
import { Config } from '../modules/rosta/models/config';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RostaService {
  private BASE_URL = environment.urls.BASE_URL;
  constructor(private http: HttpClient) { }

  public  getDutiesFromDate(weekStart: Date, staffList: number[]): Observable<RotaRow[] > {
    const url = `${this.BASE_URL}/rosta/duty_list/`;
    const weekStartStr = weekStart.toISOString();
    return this.http.post<any>(url, {weekStartStr, staffList });
  }

  public  getStaffPerDutyFromDate(weekStart: Date, dutyIdArray: number[]): Observable<RotaRowDutyView[] > {
    const url = `${this.BASE_URL}/rosta/duty_staff/`;
    const weekStartStr = weekStart.toISOString();
    return this.http.post<any>(url, {weekStartStr, dutyIdArray });
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

  public  getDutyList(): Observable<Duty[] > {
    const url = `${this.BASE_URL}/duty/`;
    return this.http.get<Duty[]>(url);
  }

  public  getPreSelectedConfig(userId: number): any{
    const url = `${this.BASE_URL}/rosta/config/`;

    const jsonPerson = '{"userId":' + userId + '}';
    const personObject = JSON.parse(jsonPerson);

    try {
      const result = this.http.post<Config>(url, personObject);
      return result;
    } catch (error) {
      return null;
    }

  }

  public  setPreSelectedConfig(config: Config): Observable<Config> {
    let res: any;
    const url = `${this.BASE_URL}/rosta/config/`;
    const json = JSON.stringify(config);
    this.http.put<any>(url, config).subscribe(response => {
      res = response;
    });
    return res;
    }

  }

