import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LibraryService } from 'src/app/services/library.service';
import { AppState } from 'src/app/store/app.states';
import * as LibraryActions from '../../../../store/library/library.actions';



@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.css']
})
export class LibraryNavComponent implements OnInit {
  result: any;

  constructor(private libraryService: LibraryService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  onClick() {
    // this.libraryService.getSavedFiles().subscribe(
    //   r => {
    //   console.log(r);
    //   this.result = r;
    // }
    // );
    this.store.dispatch(LibraryActions.GetsavedFiles());
  }

  // onDownload() {
  //   const reqFile = 'PRH_Map_1000x750_2016_March_web.pdf';
  //   this.libraryService.download(reqFile);
  // }


}
