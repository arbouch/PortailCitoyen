 import { ReclamationService } from './../../shared/reclamation.service';
import { Reclamation } from './../../model/reclamation.model';
import { Citoyen } from './../../model/citoyen.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Component({
  selector: 'app-mes-reclamation',
  templateUrl: './mes-reclamation.component.html',
  styleUrls: ['./mes-reclamation.component.css']
})
export class MesReclamationComponent implements OnInit {
  public reclamation: Reclamation;
  public reclamations: Reclamation[];
  p:number=1;
  public citoyen: Citoyen;
  cintemp : string="";
  numstored:String="";

  constructor(public service: ReclamationService,private router: Router,private http:HttpClient) { }
  ngOnInit(): void {
    this.cintemp=localStorage.getItem("cin")
    this.getreclamation(this.cintemp);
     this.numstored=sessionStorage.getItem("numtel")
   console.log(this.cintemp+"ddddddddd"+this.numstored)
if ((this.cintemp=="null")&&(this.numstored=="null")) {
   this.router.navigate(['/']);
}

  }
  public goToAddReclamation():void{
    this.router.navigate(['/ajouterreclamation']); }


  public getreclamation(cintemp : string):void{

this.service.getreclamationbycin(cintemp).subscribe(
(response:Reclamation[]) => {
 this.reclamations=response;
}

);
   }
   
  }
 


