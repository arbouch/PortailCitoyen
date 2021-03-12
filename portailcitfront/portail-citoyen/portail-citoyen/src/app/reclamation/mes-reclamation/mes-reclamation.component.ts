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
 
  public citoyen: Citoyen;
  cintemp : string="";

  constructor(public service: ReclamationService,private router: Router,private http:HttpClient) { }
  




   

  ngOnInit(): void {
    this.cintemp=localStorage.getItem("cin")
    this.getreclamation(this.cintemp);

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
 


