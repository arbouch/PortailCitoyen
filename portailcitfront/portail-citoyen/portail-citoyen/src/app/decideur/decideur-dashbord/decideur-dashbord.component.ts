import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-decideur-dashbord',
  templateUrl: './decideur-dashbord.component.html',
  styleUrls: ['./decideur-dashbord.component.css']
})
export class DecideurDashbordComponent implements OnInit {
 

   constructor(private router: Router) { }
   reclamation : boolean=true;
   signale : boolean=false;
  email : string
  ngOnInit(): void {
    this.email=sessionStorage.getItem("emaildecideur")
    console.log(this.email);
    if (this.email=="null") this.router.navigate(['/decideurlogin']);
  }
  changerdashboardreclamation(){
    this.signale=false;
    this.reclamation=true;
  }
  changerdashboardsignalements(){
    this.signale=true;
    this.reclamation=false;

  }
}
