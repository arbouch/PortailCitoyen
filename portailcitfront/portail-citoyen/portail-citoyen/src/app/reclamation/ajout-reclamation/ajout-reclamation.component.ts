import { ReclamationService } from './../../shared/reclamation.service';
import { Reclamation } from './../../model/reclamation.model';
import { Citoyen } from './../../model/citoyen.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {
   public reclamations: Reclamation[];
  msg : String = "";
  public citoyen: Citoyen;
  cintemp : String="";
  sessionvalue :String="";
  codetest :String = "";
  numstored :String="";
  erreur : boolean=false;
  showspinner : boolean;
  afficherinputverification:boolean=false;

  public reclamation = new Reclamation();
  reclamationfromform = new Reclamation();
  constructor(public service: ReclamationService,private router: Router,private http:HttpClient, private toast :ToastrService) { }

  ngOnInit(): void {
     this.sessionvalue=localStorage.getItem("cin")
  this.numstored=sessionStorage.getItem("numtel")
  console.log(this.sessionvalue+"ggggggg"+this.numstored )
    if ((this.sessionvalue=="null")&&(this.numstored=="null")) 
         this.router.navigate(['/']);
  }
  public selectOption(event){
  console.log(event);
  this.reclamationfromform.attribut=event;
  }
  public addreclamation():void{
      var bothVar = {'value1': this.reclamationfromform.attribut, 'value2': this.reclamationfromform.reclamations};
     this.service.AddReclamation(bothVar,this.sessionvalue).subscribe(
    data=> {console.log('response received');}
    ,error=>{console.log("exception occured");
    console.log(this.reclamationfromform.citoyen);
    this.msg="veuillez vérifier les informations saisies ";}
    );

      }
      public EnvoyerCode():void{
        this.showspinner=true;
        this.service.SendNumber(this.numstored.toString()).subscribe(
          data=> {
            if (data) { 
              this.showspinner=false; 
          } console.log('response received');
              }
          ,error=>{console.log("exception occured");
          this.showspinner=false;
          this.erreur=true;
           this.msg="veuillez vérifier les informations saisies ";}
          );
           this.afficherinputverification=true;
              }
              public Verifier():void{
                 this.codetest=this.reclamationfromform.code
          
                this.service.Verifier(this.codetest.toString()).subscribe(
                  data=> {console.log('response received');
                  this.toast.success('Reclamation Envoyé',"Reclamation ");
                  return this.addreclamation()

                      }
                  ,error=>{console.log("exception occured");
                  this.toast.error('Reclamation Non nvoyé non faite ',"Reclamation");
                }
                  );
                
                      }
        
  }

