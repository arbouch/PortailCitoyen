import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
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

sessionvalue :String="";
localvalue :number=0;

   ngOnInit(): void {
this.sessionvalue=sessionStorage.getItem("numtel")
//this.cindeclared=sessionStorage.getItem("cin")

if (this.sessionvalue==null) {
  this.router.navigate(['/']); }

}

   sendotp(){
    this.user.numtel=this.sessionvalue
    this.service.SendOtp(this.user).subscribe(
    data=> {console.log('response received');
      this.router.navigate(['/accueil']); }

    ,error=>{console.log("exception occured");
    this.msg="veuillez vérifier les informations saisies ";}
    );
      }
}
