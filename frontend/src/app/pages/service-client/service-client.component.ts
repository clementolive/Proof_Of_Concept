import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/interface/message';
import { MessageRequest } from 'src/app/payload/messageRequest';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.scss']
})
export class ServiceClientComponent {
  constructor(private router: Router, 
    private messageService: MessageService,
    private fb: FormBuilder) { }

    // This is subscribed in DOM with async 
  public posts$: Observable<Message[]> = this.messageService.getMessages();

  public form = this.fb.group({
     content: ['',
       [ Validators.required,]
     ],
     author: ['',
     [ Validators.required,]
   ]
   });

   public submit(): void{
    const request = this.form.value as MessageRequest;
    request.author = "Utilisateur";
    //const createpostRequest = this.form.value as Message;
    this.messageService.sendMessage(request).subscribe();
  }
}
