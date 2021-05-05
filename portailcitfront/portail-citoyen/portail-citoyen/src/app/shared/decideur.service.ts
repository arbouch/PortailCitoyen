 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Decideur } from './../model/decideur.model';
@Injectable({
  providedIn: 'root'
})
export class DecideurService {

  constructor(private http:HttpClient) { }
  public loginDecideur(decideur:Decideur):Observable<any> {
    return this.http.post<any>("http://localhost:81/decideur/login/",decideur)
  }
  
}
