import { Injectable } from '@angular/core';
import { Signale } from './../model/signale.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignaleService {

  constructor(private http:HttpClient) { }
  public getSignalbyCin(cintemp: string):Observable<Signale[]>{
     return this.http.get<Signale[]>("http://localhost:81/signalemanip/detailbycin/"+cintemp)
  }

}
