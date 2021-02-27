import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { UtiCitSite } from './../model/uti-cit-site.model';

@Injectable({
  providedIn: 'root'
})
export class UtiCitSiteService {
//addsignale
  constructor(private http:HttpClient) { }
  public getutilisationbycin(cintemp: string):Observable<UtiCitSite[]>{
    console.log("ciiiiiiiiiiiiiiiiin"+cintemp);

    return this.http.get<UtiCitSite[]>("http://localhost:81/utisitecit/detail/"+cintemp)
  }
  public AddSignal(id_manip:number):Observable<any> {
    console.log("hhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeee"+ id_manip)

    return this.http.post<any>("http://localhost:81/signalemanip/addsignale/",id_manip)
  }

}
