import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http :HttpClient) {}
public loginUserFromRemote(user:User):Observable<any> {
  return this.http.post<any>("http://localhost:81/login",user)
}


}
