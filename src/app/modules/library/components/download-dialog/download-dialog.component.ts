import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileSaver } from '../../models/fileSaver';

@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.css']
})
export class DownloadDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DownloadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FileSaver) { }

  ngOnInit(): void {
  }

}
