import { Component, Inject, OnDestroy, OnInit, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Staff } from 'src/app/models/staff';
import { AppState } from 'src/app/store/app.states';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';

@Component({
  selector: 'app-staff-picker-dialog',
  templateUrl: './staff-picker-dialog.component.html',
  styleUrls: ['./staff-picker-dialog.component.css']
})
export class StaffPickerDialogComponent implements OnInit, OnDestroy {
  selectedStaffIds$!: Subscription;
  selectedStaff: number[] = [];

  constructor(public dialogRef: MatDialogRef<StaffPickerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Staff[],
              private store: Store<AppState>
  ) {
    this.selectedStaffIds$ = this.store.select(fromRostaSelectors.staffIdsFromStore).subscribe(ss => {
      this.selectedStaff = ss;
    });
  }
  ngOnDestroy(): void {
    if (this.selectedStaffIds$) {
      this.selectedStaffIds$.unsubscribe();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
