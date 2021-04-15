import { Otp } from './../otp';
import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur : boolean=false;
  showspinner : boolean;
  test : boolean=true;
  msg="";
  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem("numtel",null)
    localStorage.setItem("cin",null);

   }


  userlogin(){
    this.showspinner=true;
    this.service.loginUserFromRemote(this.user).subscribe(
    data=> {
      if (data) { 
         this.showspinner=false; 
    } 
    console.log("response received");
     this.router.navigate(['/otp'])
     sessionStorage.setItem("numtel",this.user.numtel.toString())
     localStorage.setItem("cin",this.user.cin.toString());
    }

    ,error=>{console.log("exception occured"); this.showspinner=false;
    this.erreur=true;
    this.msg="veuillez vérifier les informations saisies "}
   

    )
      }
  
}
