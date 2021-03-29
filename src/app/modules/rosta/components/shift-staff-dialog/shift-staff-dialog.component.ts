import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from 'src/app/models/staff';
import { Duty } from '../../models/duty';

@Component({
  selector: 'app-shift-staff-dialog',
  templateUrl: './shift-staff-dialog.component.html',
  styleUrls: ['./shift-staff-dialog.component.css']
})
export class ShiftStaffDialogComponent implements OnInit {

  staffList!: Staff[];
  duty!: Duty;
  col!: number;
  selectedStaff: number[] = [];
  dateStr!: string;

  constructor(
    public dialogRef: MatDialogRef<ShiftStaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.staffList = this.data.staffList;
    this.duty = this.data.duty;
    this.col = this.data.col;
    this.selectedStaff = this.data.selectedStaff;
    this.dateStr = this.data.dateStr;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
