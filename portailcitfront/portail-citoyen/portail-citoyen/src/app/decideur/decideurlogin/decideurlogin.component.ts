  import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http';
import { DecideurService } from './../../shared/decideur.service';
import { Decideur } from './../../model/decideur.model';
@Component({
  selector: 'app-decideurlogin',
  templateUrl: './decideurlogin.component.html',
  styleUrls: ['./decideurlogin.component.css']
})
export class DecideurloginComponent implements OnInit {
  decideur = new Decideur();
  erreur : boolean=false;
  showspinner : boolean;
  test : boolean=true;
  msg="";
  captchatoken ;
  constructor(private http:HttpClient,private router: Router,private service: DecideurService) { }

  ngOnInit(): void {
    sessionStorage.setItem("emaildecideur",null)
 
  }
  decideurlogin(){
    
       this.showspinner=true;
       this.service.loginDecideur(this.decideur).subscribe(
       data=> {
         if (data) { 
            this.showspinner=false; 
       } 
       console.log("response received");
        this.router.navigate(['/dashbord']);
        sessionStorage.setItem("emaildecideur",this.decideur.emailDecideur.toString())
         
        }
   
       ,error=>{console.log("exception occured"); this.showspinner=false;
       this.erreur=true;
       this.msg="veuillez vérifier les informations saisies "}
      
   
       )
       
 
 
 
     }
    
 
     
  
       }
   
 
 
