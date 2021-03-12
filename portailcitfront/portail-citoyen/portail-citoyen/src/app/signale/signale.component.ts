import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignaleService} from "./../shared/signale.service";
import { Signale } from './../model/signale.model';

@Component({
  selector: 'app-signale',
  templateUrl: './signale.component.html',
  styleUrls: ['./signale.component.css']
})
export class SignaleComponent implements OnInit {
  public signale: Signale;
  public signales: Signale[];
   cintemp : string="";

  constructor(public service: SignaleService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.cintemp=localStorage.getItem("cin")
    this.getSignale_ByCitoyen(this.cintemp);

  }
  public getSignale_ByCitoyen(cintemp : string):void{

    this.service.getSignalbyCin(cintemp).subscribe(
    (response:Signale[]) => {
     this.signales=response;
    }
    );
       }


}
