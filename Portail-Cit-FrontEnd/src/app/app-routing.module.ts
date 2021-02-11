import { OTPverificationComponent } from './otpverification/otpverification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'',component:LoginComponent},
  {path :'accueil',component:AccueilComponent},
  {path :'otp',component:OTPverificationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
