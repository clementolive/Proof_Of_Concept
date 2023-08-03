import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Message } from 'src/app/interface/message';
import { MessageRequest } from 'src/app/payload/messageRequest';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.scss']
})
export class ServiceClientComponent implements OnInit, OnDestroy{
  constructor(private router: Router, 
    private messageService: MessageService,
    private fb: FormBuilder) {

     }
    
  ngOnInit(): void {

  }

    // This is subscribed in DOM with async 
  public posts$: Observable<Message[]> = this.messageService.getMessages();
  public sendingMessage$!: Subscription; 

  public form = this.fb.group({
     content: ['',
       [ Validators.required,]
     ],
     author: ['',
     []
   ]
   });


   public submit(): void{
    const request = this.form.value as unknown as MessageRequest;
    request.author = 2; // This emulates a session system, but implementing sessions and Spring Security would require more than the project recommends.
    this.sendingMessage$ = this.messageService.sendMessage(request).subscribe({
      next: () =>{
          this.posts$ = this.messageService.getMessages();
      }
    });
  }

  ngOnDestroy(): void {
    if(this.sendingMessage$) this.sendingMessage$.unsubscribe();
  }


}
