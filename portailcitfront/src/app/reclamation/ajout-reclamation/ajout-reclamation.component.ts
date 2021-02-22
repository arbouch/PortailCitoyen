import { ReclamationService } from './../../shared/reclamation.service';
import { Reclamation } from './../../model/reclamation.model';
import { Citoyen } from './../../model/citoyen.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {
  public reclamation: Reclamation;
  public reclamations: Reclamation[];
  msg : string = "";
  public citoyen: Citoyen;
  cintemp : string="";
  sessionvalue :String="";
  reclamationfromform = new Reclamation();
  constructor(public service: ReclamationService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.sessionvalue=localStorage.getItem("cin")

  }
  public addreclamation():void{

console.log(this.sessionvalue);
//this.reclamationfromform.citoyen=this.sessionvalue;
console.log(this.reclamationfromform.citoyen+"citoyen from angular");
var bothVar = {'value1': this.sessionvalue, 'value2': this.reclamationfromform.reclamations};

    this.service.AddReclamation(bothVar).subscribe(
    data=> {console.log('response received');
        }

    ,error=>{console.log("exception occured");
    console.log(this.reclamationfromform.citoyen);
    this.msg="veuillez vérifier les informations saisies ";}
    );

      }
  }
