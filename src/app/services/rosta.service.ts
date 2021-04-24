import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Staff } from '../models/staff';
import { MyMessage } from '../modules/messages/models/message';
import { NewMessageData } from '../modules/messages/models/newMessageData';
import { Alloc } from '../modules/rosta/models/alloc';
import { Duty } from '../modules/rosta/models/duty';
import { RotaRow, RotaRowDutyView } from '../modules/rosta/models/rotaRow';
import { environment } from '../../environments/environment';
import { Config } from '../modules/rosta/models/config';
import { catchError, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import * as fromAuthSelectors from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class RostaService implements OnDestroy {
  private BASE_URL = environment.urls.BASE_URL;
  userId$!: Subscription;
  userId = 1;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.userId$ = this.store.select(fromAuthSelectors.getUserId).subscribe((u: number) => {
      console.log('user = ', u);
      this.userId = u;
    });


  }
  ngOnDestroy(): void {
    if (this.userId$) {
      this.userId$.unsubscribe();
    }
  }

   convertDate(date: Date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd  = date.getDate().toString();

    const mmChars = mm.split('');
    const ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm : '0' + mmChars[0]) + '-' + (ddChars[1] ? dd : '0' + ddChars[0]);
  }


  public getDutiesFromDate(weekStart: Date, staffList: number[]): Observable<RotaRow[]> {
    const url = `${this.BASE_URL}/rosta/duty_list/`;
    // const weekStartStr = weekStart.toISOString().split('T')[0];
    const weekStartStr = this.convertDate(weekStart);
    console.log('week start string =' , weekStartStr);
    return this.http.post<any>(url, { weekStartStr, staffList });
  }

  public getStaffPerDutyFromDate(weekStart: Date, dutyIdArray: number[]): Observable<RotaRowDutyView[]> {
    const url = `${this.BASE_URL}/rosta/duty_staff/`;
    // const weekStartStr = weekStart.toISOString();
    const weekStartStr = this.convertDate(weekStart);
    return this.http.post<any>(url, { weekStartStr, dutyIdArray });
  }


  public saveOrEditDuty(alloc: Alloc): any {
    const url = `${this.BASE_URL}/alloc/`;
    alloc.savedBy = this.userId;
    const json = JSON.stringify(alloc);
    return this.http.put<any>(url, json).pipe(
      tap((data: any) => {
        console.log(data);
        return true;
      }),
      catchError((err) => {
        console.log('error puting Alloc ', err);
        return of(false);
      })
    );

  }

  public getDuties(): Observable<Duty[]> {
    const url = `${this.BASE_URL}/rosta/duties/`;
    return this.http.get<Duty[]>(url);
  }

  public getStaffList(): Observable<Staff[]> {
    const url = `${this.BASE_URL}/staff/`;
    return this.http.get<Staff[]>(url);
  }

  public getDutyList(): Observable<Duty[]> {
    const url = `${this.BASE_URL}/duty/`;
    return this.http.get<Duty[]>(url);
  }

  public getPreSelectedConfig(userId: number): Observable<Config> {
    const url = `${this.BASE_URL}/rosta/config/`;
    const jsonPerson = '{"userId":' + userId + '}';
    const personObject = JSON.parse(jsonPerson);
    return this.http.post<Config>(url, personObject);
  }


  public setPreSelectedConfig(config: Config): Observable<Config> {
    let res: any;
    const url = `${this.BASE_URL}/rosta/config/`;
    const json = JSON.stringify(config);
    this.http.put<any>(url, config).subscribe(response => {
      res = response;
    });
    return res;
  }

}

