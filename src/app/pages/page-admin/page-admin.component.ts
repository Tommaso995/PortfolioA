import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { AuthappService } from 'src/services/authapp.service';
import { MessaggiServiceService } from 'src/services/data/messaggi-service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {

  constructor(private messageServ : MessaggiServiceService, private httpClient : HttpClient, protected auth : AuthappService){}

  message$ : IMessage[] =[]
  error: string = "";
  id: string = '';

  ngOnInit(): void {
    this.messageServ.getMessage().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    })


  }


  handleResponse(response: IMessage[]){
    this.message$ = response;
  }

  handleError(error: Object){
    this.error = error.toString();
  }

   DeleteMessage = (id: string) => {
    this.httpClient.delete(`https://nodejs-portfoliobackendjs.onrender.com/message/${id}`)
    .subscribe(res => { /* subscribe viene usato per gestire la risposta */
      console.log(res);
      this.messageServ.getMessage();
    })
    location.reload(); /* Ricarica la pagina */
   }

  }



