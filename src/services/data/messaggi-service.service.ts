import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IMessage} from "src/app/models/message"

@Injectable({
  providedIn: 'root'
})
export class MessaggiServiceService {

  message : IMessage[] = []

  constructor(private httpClient : HttpClient) { }

  getMessage = () => {
    return this.httpClient.get<IMessage[]>(`https://nodejs-portfoliobackendjs.onrender.com/message/viewMessage`)
  }

   DeleteMessage = (id: string) => {
    this.httpClient.delete(`https://nodejs-portfoliobackendjs.onrender.com/message/${id}`)
    .subscribe(res => {
      console.log(res);
      this.getMessage();
    })
  }
}
