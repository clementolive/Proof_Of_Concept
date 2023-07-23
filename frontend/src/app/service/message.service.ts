import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interface/message';
import { HttpClient } from '@angular/common/http';
import { MessageRequest } from '../payload/messageRequest';
import { MessageResponse } from '../interface/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private pathService = 'api/message';

  constructor(private httpClient: HttpClient) { }

  public getMessages():  Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.pathService);
  }

  public sendMessage(request: MessageRequest):  Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.pathService, request);
  }
}
