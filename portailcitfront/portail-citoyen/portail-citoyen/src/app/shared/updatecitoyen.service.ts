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

}
