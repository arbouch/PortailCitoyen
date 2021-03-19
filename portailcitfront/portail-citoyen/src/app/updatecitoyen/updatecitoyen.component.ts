import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Updatecitoyen } from './../model/updatecitoyen.model';
import { Citoyen } from './../model/citoyen.model';
 import { UpdatecitoyenService } from './../shared/updatecitoyen.service'
 import { Observable } from 'rxjs';
 import { ToastContainerModule, ToastrService } from 'ngx-toastr';

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
  codetest :string="";
  numstored :String="";
  input_adresse : boolean=false;
  input_email : boolean=false;
  input_numtel : boolean=false;
  public Delegation = [];
  public Localite = [];
  public Zipcode = [];
  showMsg: boolean = false;
  afficherinputverification:boolean=false;


  public updatecitoyenform = new Updatecitoyen();
public citoyen = new Citoyen();
  constructor(public service: UpdatecitoyenService,private router: Router,private http:HttpClient, private toast :ToastrService) { }

  ngOnInit(): void {
    this.sessionvalue=localStorage.getItem("cin");
    this.numstored=sessionStorage.getItem("numtel")
    if ((this.sessionvalue=="null")&&(this.numstored=="null")) {
      this.router.navigate(['/']);
   }

  }
  update_numtel() {
    this.input_numtel=!this.input_numtel;
    this.input_adresse=false;
    this.input_email=false;
  }
  update_mail() {
    this.input_email=!this.input_email;
    this.input_adresse=false;
    this.input_numtel=false;
  }
  update_adresse() {
    this.input_adresse=!this.input_adresse;
    this.input_numtel=false;
    this.input_email=false;
  }
   public selectOption(value):void {
    console.log(value);
    this.citoyen.gouvernorat={gouvernorat: value}
    if (value=="Ariena") {

      this.Delegation = [
      { id: 1, name: 'Ariena Ville' },
      { id: 2, name: 'ETTADHAMEN' },
      { id: 3, name: 'KALAAT LANDLOUS' },
       { id: 5, name: 'LA SOUKRA' },
      { id: 6, name: 'MNIHLA' },
      { id: 7, name: 'RAOUED' },
      { id: 8, name: 'SIDI THABET' },
  ];}
  if (value=="Beja") { this.ngOnInit();
    this.Delegation = [
    { id: 1, name: 'AMDOUN' },
    { id: 2, name: 'BEJA NORD' },
    { id: 3, name: 'BEJA SUD' },
    { id: 4, name: 'GOUBELLAT' },
    { id: 5, name: 'MEJEZ EL BAB' },
    { id: 6, name: 'NEFZA' },
    { id: 7, name: 'TEBOURSOUK' },
    { id: 8, name: 'TESTOUR' },
];}
if (value=="Tunis") { this.ngOnInit();
  this.Delegation = [
  { id: 1, name: 'CARTHAGE' },
  { id: 2, name: 'BAB SOUIKA' },
  { id: 3, name: 'BAB BHAR' }];}
    return value;
  }
  public selectOption2(value):void {
    console.log(value);
    this.citoyen.delegation={delegation: value}
    if ((value=="Ariena Ville") ||(value=="ETTADHAMEN") ||(value=="KALAAT LANDLOUS") ||(value=="LA SOUKRA")

    ||(value=="MNIHLA")||(value=="LA RAOUED")||(value=="SIDI THABET")
    ){this.Localite = [
      { id: 1, name: 'Ariena Localite' },

   ];}
   if ((value=="CARTHAGE") ||(value=="BAB SOUIKA") ||(value=="BAB BHAR")   ){this.Localite = [
      { id: 1, name: 'Tunis Localite' },

   ];}


    return value;
  }
  public selectOption3(value):void {
    console.log(value);
    this.citoyen.localite={localite: value}
    if ((value=="Tunis Localite")  ){this.Zipcode = [
      { id: 1, name: '1003' },
    ];}
    if ((value=="Ariena Localite")  ){this.Zipcode = [
      { id: 1, name: '1009' },
    ];}
    return value;

   }

   public selectOption4(value):void {
    console.log(value);
    this.citoyen.code_postal=this.updatecitoyenform.newzip
     return value;

   }


 public UpdateCitoyen():void{

if(this.updatecitoyenform.newadresse!=null){
  this.citoyen.adresse=this.updatecitoyenform.newadresse;
}
if(this.updatecitoyenform.newzip!=null){

  this.citoyen.code_postal= this.updatecitoyenform.newzip ;
}
if(this.updatecitoyenform.newdelegation!=null){

  this.citoyen.delegation={delegation: this.updatecitoyen.newdelegation};
}
if(this.updatecitoyenform.newlocalite!=null){

  this.citoyen.localite= {localite: this.updatecitoyen.newlocalite}  ;
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
    data=> {console.log('response received'),console.log(this.citoyen);
        }

    ,error=>{console.log("exception occured");
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
                this.codetest=this.updatecitoyenform.code
                console.log(  "this is the number"+this.codetest.toString())
         
                this.service.Verifier(this.codetest.toString()).subscribe(
                  data=> {console.log('response received');
                  this.toast.success('modification avec succees',"Mise A jour");
                  return this.UpdateCitoyen()
                  this.showMsg= true;

                  
                      }
                  ,error=>{console.log("exception occured");
                  this.toast.error('Modification non faite ',"Mise A jour");
                   }
                  );
                
                      }
   

}
