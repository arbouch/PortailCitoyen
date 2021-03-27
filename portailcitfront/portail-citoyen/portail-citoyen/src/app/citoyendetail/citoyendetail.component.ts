import { CitoyendetailService } from './../shared/citoyendetail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Citoyen } from './../model/citoyen.model';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-citoyendetail',
  templateUrl: './citoyendetail.component.html',
  styleUrls: ['./citoyendetail.component.css']
})
export class CitoyendetailComponent implements OnInit {

  public citoyens: Citoyen[];
  public citoyen: Citoyen;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

    constructor(private service: CitoyendetailService,private router: Router) { }
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
    }
    donnespersaff() {
      this.dnpers=!this.dnpers;
      this.actenaiss=false;
      this.actedeces=false;
      this.dnaddr=false;


    }
    actedenaissancesaff() {
      this.actenaiss=!this.actenaiss;
      this.dnpers=false;
       this.actedeces=false;
      this.dnaddr=false;

    }
    actededecesaff() {
      this.actedeces=!this.actedeces;
      this.actenaiss=false;
      this.dnpers=false;
      this.dnaddr=false;


    }
    adressedeclareeaff() {
      this.dnaddr=!this.dnaddr;
      this.actenaiss=false;
      this.dnpers=false;
      this.actedeces=false;
    }
    public getcitoyens():void {
      this.service.getcitoyens().subscribe(
          (response:Citoyen[]) => {
            this.citoyens=response;
          }
      )
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


}
