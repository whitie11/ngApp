import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.states';
import { FileSaver } from '../../models/fileSaver';
import * as fromLibrarySelectors from '../../../../store/library/library.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { LibraryService } from 'src/app/services/library.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-library-main',
  templateUrl: './library-main.component.html',
  styleUrls: ['./library-main.component.css']
})
export class LibraryMainComponent implements OnInit {
  savedFiles$!: Observable<FileSaver[]>;
  savedFiles: FileSaver[] = [];
  displayedColumns: string[] = ['description', 'dateUploaded', 'file'];
  dataSource: any;

  constructor(
    private libraryService: LibraryService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
    this.savedFiles$ = this.store.select(fromLibrarySelectors.getSavedFiles);
    this.savedFiles$.subscribe(data => {
      this.savedFiles = data;
      this.dataSource = new MatTableDataSource<FileSaver>(this.savedFiles);
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
  }

  onFileSelected(fs: FileSaver) {
    const downloadDialog = this.dialog.open(DownloadDialogComponent, {
      width: '600px',
      height: '400px',
      data: fs
    });

    downloadDialog.afterClosed().subscribe(result => {
      if (result) {
        const reqFile = result.file.slice(6);
        this.libraryService.download(reqFile);
      }
    });
  }

  onNewFile() {
    const downloadDialog = this.dialog.open(UploadDialogComponent, {
      width: '600px',
      height: '400px',
      // data: fs
    });

    downloadDialog.afterClosed().subscribe(result => {
      if (result) {
        console.log('result  ' + result.file);
        const filearray = Object.assign([], this.savedFiles);
        filearray.push(result);
        this.dataSource = new MatTableDataSource<FileSaver>(filearray);
      }
      else {
        console.log('No data returned!!');
      }
      result = null;
    });
  }
}
