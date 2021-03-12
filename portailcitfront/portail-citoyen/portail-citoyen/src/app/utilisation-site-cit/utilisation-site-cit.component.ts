import { CitoyendetailService } from './../shared/citoyendetail.service';
import { Citoyen } from './../model/citoyen.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 import { UtiCitSiteService } from './../shared/uti-cit-site.service'
 import Swal from 'sweetalert2'

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
       public SendSignal(id_util_site_cit : number,cin : string):void{
    
        this.service.AddSignal(id_util_site_cit,this.cintemp).subscribe(
         data=> {console.log('response received');
             }
 
         ,error=>{console.log("exception occured");
       }
         );
 
           }


          public  sendss(id_util_site_cit : number,cin : string):void{
            Swal.fire({
              title: 'Êtes-vous sûr?              ',
              text: 'You will not be able to recover this imaginary file!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, keep it'
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                  'Envoyé!',
                  'Votre Demande est Envoyé au ......',
                  'success'

                   )
               } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                  'Cancelled',
                  'Your imaginary file is safe :)',
                  'error'
                )
              }
              if(result.value) {
                return this.SendSignal(id_util_site_cit,this.cintemp)
              }
            })
            
          }

}
