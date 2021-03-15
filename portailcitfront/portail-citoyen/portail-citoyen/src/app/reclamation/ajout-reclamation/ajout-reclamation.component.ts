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
   public reclamations: Reclamation[];
  msg : string = "";
  public citoyen: Citoyen;
  cintemp : string="";
  sessionvalue :String="";
  codetest :string = "";
  numstored :String="";
  afficherinputverification:boolean=false;

  public reclamation = new Reclamation();
  reclamationfromform = new Reclamation();
  constructor(public service: ReclamationService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.sessionvalue=localStorage.getItem("cin")
    this.numstored=sessionStorage.getItem("numtel")

  }
  public selectOption(event){
console.log(event);
this.reclamationfromform.attribut=event;
  }
  public addreclamation():void{
var bothVar = {'value1': this.reclamationfromform.attribut, 'value2': this.reclamationfromform.reclamations};
//if(confirm("Voulez vous vraiment envoyer cette reclamation ?  "))
    this.service.AddReclamation(bothVar,this.sessionvalue).subscribe(
    data=> {console.log('response received');

        }
    ,error=>{console.log("exception occured");
    console.log(this.reclamationfromform.citoyen);
    this.msg="veuillez vérifier les informations saisies ";}
    );

      }
      public EnvoyerCode():void{
       
        console.log(  "this is the number"+this.codetest.toString())

        this.service.SendNumber(this.numstored.toString()).subscribe(
          data=> {console.log('response received');
              }
          ,error=>{console.log("exception occured");
           this.msg="veuillez vérifier les informations saisies ";}
          );
      this.afficherinputverification=true;
        
              }
              public Verifier():void{
              //  this.codetest="978145"
                this.codetest=this.reclamationfromform.code
                console.log(  "this is the number"+this.codetest.toString())
         
                this.service.Verifier(this.codetest.toString()).subscribe(
                  data=> {console.log('response received');
                  return this.addreclamation()

                      }
                  ,error=>{console.log("exception occured");
                   this.msg="veuillez vérifier les informations saisies ";}
                  );
                
                      }
        
  }

