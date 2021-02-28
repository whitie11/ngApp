import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Staff } from 'src/app/models/staff';
import { AppState } from 'src/app/store/app.states';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';

@Component({
  selector: 'app-staff-picker-dialog',
  templateUrl: './staff-picker-dialog.component.html',
  styleUrls: ['./staff-picker-dialog.component.css']
})
export class StaffPickerDialogComponent implements OnInit {

  selectedStaff: number[] = [];

  constructor(public dialogRef: MatDialogRef<StaffPickerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Staff[],
              private store: Store<AppState> ) {
    this.store.select(fromRostaSelectors.staffIdsFromStore).subscribe( ss => {
      this.selectedStaff = ss;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
