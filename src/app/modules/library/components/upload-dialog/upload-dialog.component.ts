import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LibraryService } from 'src/app/services/library.service';
import { validateWhitespace } from 'src/app/utilities/validators';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {

  @ViewChild('fileUpload', { static: false }) fileUpload!: ElementRef; files = [];
  uploadForm: any;
  fileProgress = 0;

  constructor(
    public dialogUploadRef: MatDialogRef<UploadDialogComponent>,
    private libraryService: LibraryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: [null, Validators.required],
      description: ['', [Validators.required, validateWhitespace]]
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.uploadForm.get('file').setValue(file);
    }
  }

  uploadFile() {
    const formData = new FormData();
    const file = this.uploadForm.get('file').value;
    formData.append('file', file);
    formData.append('description', this.uploadForm.get('description').value);
    file.inProgress = true;
    this.libraryService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.fileProgress = Math.round(event.loaded * 100 / event.total);
            }
            break;
          case HttpEventType.Response:
            return event;
        }
        return;
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
          this.dialogUploadRef.close(event.body);
        }
      });
  }

  onCancelClick() {
    this.dialogUploadRef.close();
  }

}
