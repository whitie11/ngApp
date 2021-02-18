import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibraryNavComponent } from './components/library-nav/library-nav.component';
import { LibraryMainComponent } from './components/library-main/library-main.component';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { DownloadDialogComponent } from './components/download-dialog/download-dialog.component';


@NgModule({
  declarations: [LibraryComponent, LibraryNavComponent, LibraryMainComponent, UploadDialogComponent, DownloadDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
