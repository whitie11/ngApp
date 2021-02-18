import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyMessage } from '../modules/messages/models/message';
import { NewMessageData } from '../modules/messages/models/newMessageData';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  public  getAllMessages(): Observable<MyMessage[] > {
    const url = `${this.BASE_URL}/messages/all_messages/`;
    const result = this.http.get<MyMessage[]>(url);
    return  result;
  }

  public  getMessagesFromDate(posted: Date): Observable<MyMessage[] > {
    const url = `${this.BASE_URL}/messages/all_messages_from_date/`;
    const postedStr = posted.toLocaleDateString();
    console.log('in get messages from date');
    return this.http.post<any>(url, {postedStr});
  }

  public  getFilteredMessagesFromDate(posted: Date, incArchived: boolean): Observable<MyMessage[] > {
    const url = `${this.BASE_URL}/messages/filtered_messages_from_date/`;
    const postedStr = posted.toLocaleDateString();
    console.log('message service ' + incArchived);
    return this.http.post<any>(url, {postedStr, incArchived});
  }

  public  saveMessage(message: NewMessageData): Observable<MyMessage> {
    const url = `${this.BASE_URL}/messages/save_message/`;
    const json = JSON.stringify(message);
    return this.http.post<any>(url, json);
  }

  public  archiveMessage(messageId: number): Observable<MyMessage> {
    const url = `${this.BASE_URL}/messages/archive_message/`;
    const data = JSON.stringify({id: messageId});
    return this.http.put<any>(url, data);
  }

}
