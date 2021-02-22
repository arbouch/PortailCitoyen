import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccueilComponent } from './accueil/accueil.component';
import { OTPverificationComponent } from './otpverification/otpverification.component';
import { CitoyendetailComponent } from './citoyendetail/citoyendetail.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { MesReclamationComponent } from './reclamation/mes-reclamation/mes-reclamation.component';
import { AjoutReclamationComponent } from './reclamation/ajout-reclamation/ajout-reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AccueilComponent,
    OTPverificationComponent,
    CitoyendetailComponent,
    ReclamationComponent,
    MesReclamationComponent,
    AjoutReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
