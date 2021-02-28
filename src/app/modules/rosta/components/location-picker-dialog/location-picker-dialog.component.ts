import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Duty } from '../../models/duty';
import * as fromRostaSelectors from '../../../../store/rosta/rosta.selectors';

@Component({
  selector: 'app-location-picker-dialog',
  templateUrl: './location-picker-dialog.component.html',
  styleUrls: ['./location-picker-dialog.component.css']
})
export class LocationPickerDialogComponent implements OnInit {

  selectedDuties: number[] = [];
  constructor(public dialogRef: MatDialogRef<LocationPickerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Duty[],
              private store: Store<AppState>
    ) {
this.store.select(fromRostaSelectors.dutyIdsFromStore).subscribe( sd => {
this.selectedDuties = sd;
});
}

onNoClick(): void {
this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
