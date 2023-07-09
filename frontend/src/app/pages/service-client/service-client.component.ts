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
    //throw new Error('Method not implemented.');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
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
    const request = this.form.value as MessageRequest;
    request.author = "Utilisateur";
    this.sendingMessage$ = this.messageService.sendMessage(request).subscribe({
      next: () =>{
          //this.router.navigate(["ServiceClientComponent"]);
          //this.sendingMessage$ = this.messageService.getMessages().subscribe();
          window.location.reload();
      }
    });
  }

  ngOnDestroy(): void {
    if(this.sendingMessage$) this.sendingMessage$.unsubscribe();
  }


}
