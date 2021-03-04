import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Updatecitoyen } from './../model/updatecitoyen.model';
import { Citoyen } from './../model/citoyen.model';

import { UpdatecitoyenService } from './../shared/updatecitoyen.service';


@Component({
  selector: 'app-updatecitoyen',
  templateUrl: './updatecitoyen.component.html',
  styleUrls: ['./updatecitoyen.component.css']
})
export class UpdatecitoyenComponent implements OnInit {
  public updatecitoyen:Updatecitoyen;
  public updatecitoyens: Updatecitoyen[];
  sessionvalue :String="";
  msg:string="";
  public updatecitoyenform = new Updatecitoyen();
public citoyen = new Citoyen();
  constructor(public service: UpdatecitoyenService,private router: Router,private http:HttpClient) { }


  ngOnInit(): void {
    this.sessionvalue=localStorage.getItem("cin")

  }
  public selectOption(value):void {
    console.log(value);
    this.citoyen.gouvernorat={gouvernorat: value}
    return value;
  }
public UpdateCitoyen():void{

if(this.updatecitoyenform.newadresse!=null){
  this.citoyen.adresse=this.updatecitoyenform.newadresse;
}
if(this.updatecitoyenform.newzip!=null){

  this.citoyen.code_postal=this.updatecitoyenform.newzip;
}
if(this.updatecitoyenform.newdelegation!=null){

  this.citoyen.delegation=this.updatecitoyenform.newdelegation;
}
if(this.updatecitoyenform.newlocalite!=null){

  this.citoyen.localite=this.updatecitoyenform.newlocalite;
}
if(this.updatecitoyenform.newgouvernorat!=null){

  this.citoyen.gouvernorat={gouvernorat: this.updatecitoyen.newgouvernorat};
}
if(this.updatecitoyenform.newemail!=null){
  this.citoyen.email=this.updatecitoyenform.newemail;
}
if(this.updatecitoyenform.newnumtel!=null){

  this.citoyen.numtel=this.updatecitoyenform.newnumtel;

}

  this.service.UpdateCitoyen(this.sessionvalue,this.citoyen).subscribe(
    data=> {console.log('response received');
        }

    ,error=>{console.log("exception occured");
     this.msg="veuillez vérifier les informations saisies ";}
    );

      }

}
