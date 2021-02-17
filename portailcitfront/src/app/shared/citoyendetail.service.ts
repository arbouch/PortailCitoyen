import { Injectable } from '@angular/core';
import { Citoyen } from './../model/citoyen.model';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
  import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CitoyendetailService {

  private baseUrl = "http://localhost:81/citoyen";

  constructor(private http:HttpClient) { }

public getcitoyens():Observable<any>{

  return this.http.get<any>("http://localhost:81/citoyen/all")
}
public getcitoyenbycin(cintemp: string): Observable<any>{
  console.log("ciiiiiiiiiiiiiiiiin"+cintemp);
  return this.http.get("http://localhost:81/citoyen/detail/"+cintemp)

}
}
