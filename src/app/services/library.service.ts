import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileSaver } from '../modules/library/models/fileSaver';

import { saveAs } from 'file-saver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private BASE_URL = environment.urls.BASE_URL;
  constructor(private http: HttpClient) { }

  public  getSavedFiles(): Observable<FileSaver[] > {
    const url = `${this.BASE_URL}/library/details/`;
    const result = this.http.get<FileSaver[]>(url);
    return  result;
  }

  public download(fl: string): void{
    const url = `${this.BASE_URL}/library/download/`;
   // const flStr = '/' + fl;
    this.http.post(url,
      {fileStr: fl}, { responseType: 'blob'}).subscribe(
      data => {
        const x = data;
        saveAs(data, fl );
      }
    , err => {
      alert(' Error Downloading...');
    });
  }

  public upload(formData: FormData) {
    const url = `${this.BASE_URL}/library/upload/`;
    return this.http.post<any>(url, formData, {
        reportProgress: true,
        observe: 'events'
      });
  }


}
