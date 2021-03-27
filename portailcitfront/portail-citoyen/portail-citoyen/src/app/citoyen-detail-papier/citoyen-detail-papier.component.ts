import { Component, OnInit } from '@angular/core';
 import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Citoyen } from './../model/citoyen.model';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CitoyenDetailPapierService } from './../shared/citoyen-detail-papier.service';

 
@Component({
  selector: 'app-citoyen-detail-papier',
  templateUrl: './citoyen-detail-papier.component.html',
  styleUrls: ['./citoyen-detail-papier.component.css']
})
export class CitoyenDetailPapierComponent implements OnInit {
  public citoyens: Citoyen[];
  public citoyen: Citoyen;
  public qrvalue: string;

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';

  constructor(private service: CitoyenDetailPapierService,private router: Router) { }
  dnpers : boolean=false;
  actenaiss : boolean=false;
  actedeces : boolean=false;
  dnaddr : boolean=false;
  erreur : boolean=false;
  showspinner : boolean;

  cin : string="";
cintemp : string="";

  ngOnInit(): void {
    this.cin=sessionStorage.getItem("numtel")
    this.cintemp=localStorage.getItem("cin")
   this.getcitoyen(this.cintemp);
   this.qetQr(this.cintemp);
  }
  public getcitoyen(cintemp : string):void {
    this.showspinner=true; 

    this.service.getcitoyenbycin(cintemp).subscribe(
        (response:Citoyen) => {
          if (response) { 
            this.showspinner=false; 
        } 
          this.citoyen=response;
        }
        ,error=>{console.log("exception occured"); this.showspinner=false;
        this.erreur=true;
 }
 
    )
  }

  public qetQr(cintemp : string):void {
    this.showspinner=true; 

    this.service.getqrbyCin(cintemp).subscribe(
        (response:any) => {
          if (response) { 
            this.showspinner=false; 
        } 
        var myJSON = JSON.stringify(response);
 
          this.value=myJSON;
          console.log("hhhhhhhhhhhhh"+this.value )
        }
        ,error=>{console.log("exception occured"); this.showspinner=false;
        this.erreur=true;

   
 }
 
    )
  }



}