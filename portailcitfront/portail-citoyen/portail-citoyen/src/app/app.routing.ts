import { ReclamationComponent } from './reclamation/reclamation.component';
 import { CitoyendetailService } from './shared/citoyendetail.service';
import { CitoyendetailComponent } from './citoyendetail/citoyendetail.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AccueilComponent } from "./accueil/accueil.component";
import { AjoutReclamationComponent } from "./reclamation/ajout-reclamation/ajout-reclamation.component";
import { MesReclamationComponent } from './reclamation/mes-reclamation/mes-reclamation.component';
import { OTPverificationComponent } from './otpverification/otpverification.component';
import { UpdatecitoyenComponent } from './updatecitoyen/updatecitoyen.component';
import { UtilisationSiteCitComponent } from './utilisation-site-cit/utilisation-site-cit.component';
import { SignaleComponent } from './signale/signale.component';
import { CitoyenDetailPapierComponent } from './citoyen-detail-papier/citoyen-detail-papier.component';
import { DecideurloginComponent } from "./decideur/decideurlogin/decideurlogin.component";
import { DecideurDashbordComponent } from "./decideur/decideur-dashbord/decideur-dashbord.component";
import { DecideurComponent } from './decideur/decideur.component';
import { Testv3Component } from './testv3/testv3.component';


const routes: Routes =[
    { path: 'v3',component: Testv3Component },
    { path: 'decideurlogin',component:  DecideurloginComponent},
    { path: 'dashbord',component: DecideurDashbordComponent },
    { path: 'dashborddecideur',component: DecideurComponent },
      { path: 'nucleoicons',component: NucleoiconsComponent },
     { path: 'examples/landing',component: LandingComponent },
     { path: 'examples/profile',component: ProfileComponent },
     {path :'accueil',component:AccueilComponent},
     {path :'detailscitoyens',component:CitoyendetailComponent},
     {path :'mesreclamation',component:MesReclamationComponent},
     {path :'ajouterreclamation',component:AjoutReclamationComponent},
     {path :'utilisation_site_cit',component:UtilisationSiteCitComponent},
     {path :'messignale',component:SignaleComponent},
     {path :'update',component:UpdatecitoyenComponent},
     {path :'reclamation',component:ReclamationComponent},
     {path :'',component:LoginComponent},
     {path :'otp',component:OTPverificationComponent},
     {path :'papier',component:CitoyenDetailPapierComponent}

      

];

@NgModule({
    imports: [
  CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
