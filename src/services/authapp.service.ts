import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Iadmin} from '../app/models/logAdmin';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {



  constructor(private http : HttpClient, private route : Router) { }


  isLogged = () : boolean => (sessionStorage.getItem("token")) ? true : false;

  logout = () : void => {
     sessionStorage.clear();
      location.reload();
    }
}
