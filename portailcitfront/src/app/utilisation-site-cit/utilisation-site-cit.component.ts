import { Citoyen } from './../model/citoyen.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UtiCitSiteService } from "./../shared/uti-cit-site.service";
import { UtiCitSite } from './../model/uti-cit-site.model';

@Component({
  selector: 'app-utilisation-site-cit',
  templateUrl: './utilisation-site-cit.component.html',
  styleUrls: ['./utilisation-site-cit.component.css']
})
export class UtilisationSiteCitComponent implements OnInit {
  public uticitsite: UtiCitSite;
  public uticitsites: UtiCitSite[];

  public citoyen: Citoyen;
  cintemp : string="";
  constructor(public service: UtiCitSiteService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.cintemp=localStorage.getItem("cin")
    this.getuti_cit_site(this.cintemp);

  }
  public getuti_cit_site(cintemp : string):void{

    this.service.getutilisationbycin(cintemp).subscribe(
    (response:UtiCitSite[]) => {
     this.uticitsites=response;
    }

    );
       }
}
