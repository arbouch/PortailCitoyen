import { CitoyendetailService } from './../shared/citoyendetail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Citoyen } from '../model/citoyen.model';
@Component({
  selector: 'app-citoyendetail',
  templateUrl: './citoyendetail.component.html',
  styleUrls: ['./citoyendetail.component.css']
})
export class CitoyendetailComponent implements OnInit {
public citoyens: Citoyen[];
public citoyen: Citoyen;

  constructor(private service: CitoyendetailService,private router: Router) { }
  cin : string="";
cintemp : string="";
  ngOnInit(): void {
    this.cin=sessionStorage.getItem("numtel")
    this.cintemp=localStorage.getItem("cin")

   this.getcitoyen(this.cintemp);
  }
  public getcitoyens():void {
    this.service.getcitoyens().subscribe(
        (response:Citoyen[]) => {
          this.citoyens=response;
        }
    )
  }
  public getcitoyen(cintemp : string):void {

    this.service.getcitoyenbycin(cintemp).subscribe(
        (response:Citoyen) => {
          this.citoyen=response;
        }
    )
  }

}
