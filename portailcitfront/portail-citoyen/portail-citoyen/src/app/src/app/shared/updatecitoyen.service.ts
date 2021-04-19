import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatecitoyenService {

  constructor(private http:HttpClient) { }
  public UpdateCitoyen(cin,bothVar):Observable<any> {

    return this.http.post<any>("http://localhost:81/citoyen/update/"+cin,bothVar)
  }
  public Verifier(codetest):Observable<String> {

    return this.http.post<String>("http://localhost:81/citoyen/verification/"+codetest,{})
  }
  public SendNumber(numstored):Observable<String> {

    return this.http.post<String>("http://localhost:81/citoyen/getnumber/",numstored)
  }


}
