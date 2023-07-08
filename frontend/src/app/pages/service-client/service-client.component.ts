import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/interface/message';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.scss']
})
export class ServiceClientComponent {
  constructor(private router: Router, 
    private messageService: MessageService) { }

    // This is subscribed in DOM with async 
  public posts$: Observable<Message[]> = this.messageService.getMessages();
}
