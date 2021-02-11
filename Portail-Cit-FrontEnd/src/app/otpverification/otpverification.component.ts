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

  // tslint:disable-next-line: typedef-whitespace
  constructor(private service: RegistrationService, private router : Router) { }
  msg='';
  numtel=0;
   otp=0;
   user = new User();

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  sendotp(){
    this.service.SendOtp(this.user).subscribe(
    data=> {console.log('response received');
     // tslint:disable-next-line: align
     this.router.navigate(['/accueil']); }

    ,error=>{console.log("exception occured");
    this.msg="veuillez vérifier les informations saisies ";}
    );
      }
}
