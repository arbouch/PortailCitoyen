import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OTPverificationComponent implements OnInit {

  constructor(private service: RegistrationService, private router : Router) { }
  msg='';
  numtel=0;
   otp=0;
   user = new User();
   erreur : boolean=false;
   showspinner : boolean;
 
   numstored:String="";
sessionvalue :String="";
localvalue :number=0;

   ngOnInit(): void {
    this.sessionvalue=localStorage.getItem("cin")
    this.numstored=sessionStorage.getItem("numtel")
   console.log(this.sessionvalue+"ddddddddd"+this.numstored)
if ((this.sessionvalue=="null")&&(this.numstored=="null")) 
   this.router.navigate(['/']);

}

   sendotp(){
    this.showspinner=true;
    this.user.numtel=this.numstored
    this.service.SendOtp(this.user).subscribe(
      data=> {
        if (data!=null) { 
           this.showspinner=false; 
           console.log("response received");
           this.router.navigate(['/detailscitoyens'])

      } 
      else {console.log("exception occured"); this.showspinner=false;
      this.erreur=true;
      this.msg="veuillez vérifier les informations saisies "} 
       }
       ,error=>{console.log("exception occured"); this.showspinner=false;
       this.erreur=true;
       this.msg="veuillez vérifier les informations saisies "}
      
   
       )
         }
     
   }
   
