import { AjoutReclamationComponent } from './reclamation/ajout-reclamation/ajout-reclamation.component';
import { MesReclamationComponent } from './reclamation/mes-reclamation/mes-reclamation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OTPverificationComponent } from './otpverification/otpverification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CitoyendetailComponent } from './citoyendetail/citoyendetail.component';

const routes: Routes = [
  {path :'',component:LoginComponent},
  {path :'otp',component:OTPverificationComponent},
  {path :'accueil',component:AccueilComponent},
  {path :'detailscitoyens',component:CitoyendetailComponent},
  {path :'mesreclamation',component:MesReclamationComponent},
  {path :'ajouterreclamation',component:AjoutReclamationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
