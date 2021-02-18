import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validateWhitespace } from 'src/app/utilities/validators';


@Component({
  selector: 'app-message-new-dialog',
  templateUrl: './message-new-dialog.component.html',
  styleUrls: ['./message-new-dialog.component.css']
})
export class MessageNewDialogComponent implements OnInit {

  formdata: any;

  constructor(
    public dialogRef: MatDialogRef<MessageNewDialogComponent>,
    private fb: FormBuilder) {
    this.formdata = this.fb.group({
      subject: this.fb.control('', [Validators.required, validateWhitespace]),
      body: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.formdata.value);
  }

}
