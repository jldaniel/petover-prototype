import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// Service and component for beta login
import { BetaloginComponent } from './betalogin/betalogin.component';
import { BetaloginService } from './betalogin/betalogin.service';

import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page404/404.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api/api.service';
import { LoginService } from './util/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { PetsComponent } from './pets/pets.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { StayoversComponent } from './stayovers/stayovers.component';
import { CaretakerinfoComponent } from './caretakerinfo/caretakerinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    BetaloginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    PetsComponent,
    ServicesComponent,
    RegisterComponent,
    ProfileComponent,
    EditprofileComponent,
    MessagesComponent,
    StayoversComponent,
    CaretakerinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BetaloginService,
    ApiService,
    LoginService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

