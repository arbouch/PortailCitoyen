import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Reclamation } from './../model/reclamation.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  public getreclamationbycin(cintemp: string):Observable<Reclamation[]>{
    console.log("ciiiiiiiiiiiiiiiiin"+cintemp);

    return this.http.get<Reclamation[]>("http://localhost:81/reclamation/detail/"+cintemp)
  }
  public AddReclamation(bothVar):Observable<any> {

    return this.http.post<any>("http://localhost:81/reclamation/addreclamation/",bothVar)
  }
}
