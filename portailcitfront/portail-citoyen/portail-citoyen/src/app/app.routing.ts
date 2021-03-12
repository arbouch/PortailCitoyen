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


const routes: Routes =[
    { path: 'nucleoicons',component: NucleoiconsComponent },
    { path: 'examples/landing',component: LandingComponent },
     { path: 'examples/profile',component: ProfileComponent },
     {path :'',component:LoginComponent},
     {path :'otp',component:OTPverificationComponent},
     {path :'accueil',component:AccueilComponent},
     {path :'detailscitoyens',component:CitoyendetailComponent},
     {path :'mesreclamation',component:MesReclamationComponent},
     {path :'ajouterreclamation',component:AjoutReclamationComponent},
     {path :'utilisation_site_cit',component:UtilisationSiteCitComponent},
     {path :'messignale',component:SignaleComponent},
     {path :'update',component:UpdatecitoyenComponent}
     

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
