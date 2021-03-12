 import { Reclamation } from './model/reclamation.model';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccueilComponent } from './accueil/accueil.component';
import { OTPverificationComponent } from './otpverification/otpverification.component';
import { CitoyendetailComponent } from './citoyendetail/citoyendetail.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { MesReclamationComponent } from './reclamation/mes-reclamation/mes-reclamation.component';
import { AjoutReclamationComponent } from './reclamation/ajout-reclamation/ajout-reclamation.component';
import { UtilisationSiteCitComponent } from './utilisation-site-cit/utilisation-site-cit.component';
import { SignaleComponent } from './signale/signale.component';
import { UpdatecitoyenComponent } from './updatecitoyen/updatecitoyen.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CitoyendetailComponent,
        AjoutReclamationComponent,
        LoginComponent,
        MesReclamationComponent,
        UpdatecitoyenComponent,
        ReclamationComponent,
        SignaleComponent,
        UtilisationSiteCitComponent,
        OTPverificationComponent


        
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
