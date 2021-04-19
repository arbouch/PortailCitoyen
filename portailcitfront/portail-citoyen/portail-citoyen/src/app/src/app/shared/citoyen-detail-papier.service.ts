import { Injectable } from '@angular/core';
import { Citoyen } from './../model/citoyen.model';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitoyenDetailPapierService {

  constructor(private http:HttpClient) { }
  public getcitoyenbycin(cintemp: string): Observable<any>{
    return this.http.get("http://localhost:81/citoyen/detail/"+cintemp)
  }
  public getqrbyCin(cintemp: string): Observable<any>{
    return this.http.get("http://localhost:81/citoyen/detailpapier/"+cintemp)
  }

  
}
